import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Charts from "./components/Charts";
import FilterControls from "./components/FilterControls";
import Navbar from "./components/Navbar";
import Playlist from "./components/Playlist";
import Song from "./types/Song";
import { FirstLetter, Sort } from "./types/SortsFilters";

// https://www.last.fm/api/show/chart.getTopTracks
const LASTFM_API = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${
  import.meta.env.VITE_APP_LASTFM_API_KEY
}&format=json`;

function App() {
  const [songs, setSongs] = useState<Song[]>([]); // All songs from the API (charts)
  const [filteredSongs, setFilteredSongs] = useState<Song[]>([]); // Filtered songs from the API
  const [playlist, setPlaylist] = useState<Song[]>([]); // Songs that are in the playlist
  const [filteredPlaylist, setFilteredPlaylist] = useState<Song[]>([]); // Filtered songs in the playlist

  const [filterArtist, setFilterArtist] = useState<FirstLetter>("all");
  const [filterSong, setFilterSong] = useState<FirstLetter>("all");
  const [sort, setSort] = useState<Sort>("alphabetical by artist");

  // Fetch songs from the Last.fm API
  const fetchSongs = async () => {
    const response = await fetch(LASTFM_API);
    const data = await response.json();
    return data.tracks.track;
  };

  // Fetch songs when the component mounts
  useEffect(() => {
    fetchSongs().then((songs) => setSongs(songs));
  }, []);

  // Filter and sort
  useEffect(() => {
    let filteredSongs = [...songs];
    let filteredPlaylist = [...playlist];

    // Filter by artist
    if (filterArtist !== "all") {
      filteredSongs = filteredSongs.filter((song) => {
        const firstLetter = song.artist.name[0].toUpperCase();
        return firstLetter >= filterArtist[0] && firstLetter <= filterArtist[2];
      });
      filteredPlaylist = filteredPlaylist.filter((song) => {
        const firstLetter = song.artist.name[0].toUpperCase();
        return firstLetter >= filterArtist[0] && firstLetter <= filterArtist[2];
      });
    }

    // Filter by song
    if (filterSong !== "all") {
      filteredSongs = filteredSongs.filter((song) => {
        const firstLetter = song.name[0].toUpperCase();
        return firstLetter >= filterSong[0] && firstLetter <= filterSong[2];
      });
      filteredPlaylist = filteredPlaylist.filter((song) => {
        const firstLetter = song.name[0].toUpperCase();
        return firstLetter >= filterSong[0] && firstLetter <= filterSong[2];
      });
    }

    // Sort
    if (sort === "alphabetical by artist") {
      filteredSongs.sort((a, b) => {
        if (a.artist.name < b.artist.name) return -1;
        if (a.artist.name > b.artist.name) return 1;
        return 0;
      });
      filteredPlaylist.sort((a, b) => {
        if (a.artist.name < b.artist.name) return -1;
        if (a.artist.name > b.artist.name) return 1;
        return 0;
      });
    } else if (sort === "alphabetical by song") {
      filteredSongs.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
      filteredPlaylist.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    } else if (sort === "listeners") {
      filteredSongs.sort(
        (a, b) => parseInt(b.listeners) - parseInt(a.listeners)
      );
      filteredPlaylist.sort(
        (a, b) => parseInt(b.listeners) - parseInt(a.listeners)
      );
    } else if (sort === "play count") {
      filteredSongs.sort(
        (a, b) => parseInt(b.playcount) - parseInt(a.playcount)
      );
      filteredPlaylist.sort(
        (a, b) => parseInt(b.playcount) - parseInt(a.playcount)
      );
    }

    setFilteredSongs(filteredSongs);
    setFilteredPlaylist(filteredPlaylist);
  }, [songs, playlist, filterArtist, filterSong, sort]);

  return (
    <>
      <Navbar />
      {!songs.length ? (
        <div className="text-center mt-5">
          <h1>Loading...</h1>
        </div>
      ) : (
        <Container>
          <FilterControls
            {...{
              filterArtist,
              filterSong,
              sort,
              setFilterArtist,
              setFilterSong,
              setSort,
            }}
          />
          <Row>
            <Col xs={12} md={9} className="text-center">
              <h2>Charts</h2>
              <Charts
                songs={filteredSongs}
                playlist={playlist}
                setPlaylist={setPlaylist}
              />
            </Col>
            <Col xs={12} md={3}>
              <h2 className="text-center">Playlist</h2>
              <Playlist songs={filteredPlaylist} setSongs={setPlaylist} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default App;
