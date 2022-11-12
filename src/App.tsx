import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Playlist from "./components/Playlist";
import Song from "./types/Song";

function App() {
  const [songs, setSongs] = useState<Song[]>([]); // All songs from the API (charts)
  const [playlist, setPlaylist] = useState<Song[]>([]); // Songs that are in the playlist

  const [search, setSearch] = useState<string>(""); // Search term
  const [sort, setSort] = useState<string>(""); // Sort term

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
