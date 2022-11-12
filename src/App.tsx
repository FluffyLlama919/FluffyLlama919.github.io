import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Playlist from "./components/Playlist";
import Song from "./types/Song";

// https://www.last.fm/api/show/chart.getTopTracks
const LASTFM_API = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${
  import.meta.env.VITE_APP_LASTFM_API_KEY
}&format=json`;

//
const url = "https://musicbrainz.org/ws/2/artist/[MBID]?inc=url-rels&fmt=json";

function App() {
  const [songs, setSongs] = useState<Song[]>([]); // All songs from the API (charts)
  const [playlist, setPlaylist] = useState<Song[]>([]); // Songs that are in the playlist

  const [search, setSearch] = useState<string>(""); // Search term
  const [sort, setSort] = useState<string>(""); // Sort term

  // Fetch songs from the Last.fm API
  const fetchSongs = async () => {
    const response = await fetch(LASTFM_API);
    const data = await response.json();
    return data.tracks.track;
  };

  // Fetch artist art from MusicBrainz API
  const fetchArtistArt = async (songs: Song[]) => {
    setSongs(songs); // TODO
    /*
    await Promise.all(
      songs.map(async (song) => {
        // fetch with no cors
        const response = await fetch(url.replace("[MBID]", song.artist.mbid), {
          mode: "no-cors",
        });
        const data = await response.json();
        const artistArt = data.relations.find(
          (relation: any) => relation.type === "image"
        );
        song.artist.image = artistArt.url.resource;
        songsWithArt.push(song);
      })
    );
    setSongs(songsWithArt);
    */
  };

  // Fetch songs when the component mounts
  useEffect(() => {
    fetchSongs().then((songs) => fetchArtistArt(songs));
  }, []);

  return (
    <>
      <Navbar />
      {!songs.length ? (
        <div className="text-center mt-5">
          <h1>Loading...</h1>
        </div>
      ) : (
        <Container>
          <Row>
            <Col xs={12} md={9} className="text-center">
              <h2>Charts</h2>
              <Charts songs={songs} />
            </Col>
            <Col xs={12} md={3} className="text-center">
              <h2>Playlist</h2>
              <Playlist />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default App;
