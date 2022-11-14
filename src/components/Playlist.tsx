import { Button, Col, Row } from "react-bootstrap";
import Song from "../types/Song";
import SongCard from "./SongCard";

interface Props {
  songs: Song[];
  setSongs: (songs: Song[]) => void;
}

function fmtNum(num: string) {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Playlist({ songs, setSongs }: Props) {
  const removeSong = (song: Song) => {
    setSongs(songs.filter((s) => s !== song));
  };

  return (
    <>
      <div className="text-muted">
        <h6>Aggregated Data</h6>
        <p>
          <ul>
            <li>Number of songs: {songs.length}</li>
            <li>
              Total Play Count:{" "}
              {fmtNum(
                songs
                  .reduce((acc, song) => acc + parseInt(song.playcount), 0)
                  .toString()
              )}
            </li>
            <li>
              Average Play Count:{" "}
              {fmtNum(
                (
                  songs.reduce(
                    (acc, song) => acc + parseInt(song.playcount),
                    0
                  ) / (songs.length || 1)
                ).toFixed(2)
              )}
            </li>
          </ul>
        </p>
      </div>
      <Row xs={2} md={1} className="g-4 text-center">
        <Button variant="secondary" size="sm" onClick={() => setSongs([])}>
          Clear Playlist
        </Button>
        {songs.map((song, idx) => (
          <Col key={idx}>
            <SongCard song={song} onClick={removeSong} label="-" />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Playlist;
