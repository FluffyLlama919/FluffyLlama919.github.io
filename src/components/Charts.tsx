import { Col, Row } from "react-bootstrap";
import Song from "../types/Song";
import SongCard from "./SongCard";

interface Props {
  songs: Song[];
  playlist: Song[];
  setPlaylist: (playlist: Song[]) => void;
}

function Charts({ songs, playlist, setPlaylist }: Props) {
  const addSong = (song: Song) => {
    if (playlist.find((s) => s.name === song.name)) return;
    setPlaylist([...playlist, song]);
  };

  return (
    <Row xs={2} md={3} lg={4} className="g-4">
      {songs.map((song, idx) => (
        <Col key={idx}>
          <SongCard song={song} onClick={addSong} label="+" />
        </Col>
      ))}
    </Row>
  );
}

export default Charts;
