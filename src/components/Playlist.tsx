import { Button, Col, Row } from "react-bootstrap";
import Song from "../types/Song";
import SongCard from "./SongCard";

interface Props {
  songs: Song[];
  setSongs: (songs: Song[]) => void;
}

function Playlist({ songs, setSongs }: Props) {
  const removeSong = (song: Song) => {
    setSongs(songs.filter((s) => s !== song));
  };

  return (
    <Row xs={2} md={1} className="g-4 text-center">
      {songs.length > 0 && (
        <Button variant="secondary" size="sm" onClick={() => setSongs([])}>
          Clear Playlist
        </Button>
      )}
      {songs.map((song, idx) => (
        <Col key={idx}>
          <SongCard song={song} onClick={removeSong} label="-" />
        </Col>
      ))}
    </Row>
  );
}

export default Playlist;
