import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Playlist from "./components/Playlist";
import Song from "./types/Song";

// https://www.last.fm/api/show/chart.getTopTracks
const API_URL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=${
  import.meta.env.VITE_APP_LASTFM_API_KEY
}&format=json`;

function App() {
  const [songs, setSongs] = useState<Song[]>([]); // All songs from the API (charts)
  const [playlist, setPlaylist] = useState<Song[]>([]); // Songs that are in the playlist

  const [search, setSearch] = useState<string>(""); // Search term
  const [sort, setSort] = useState<string>(""); // Sort term

  // Fetch songs from the API
  const fetchSongs = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setSongs(data.tracks.track);
  };

  // Fetch songs when the component mounts
  useEffect(() => {
    fetchSongs();
  }, []);

  return (
    <div>
      <Navbar />
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
    </div>
  );
}

export default App;
