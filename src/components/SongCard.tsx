import { Button, Card } from "react-bootstrap";
import Song from "../types/Song";

interface Props {
  song: Song;
  onClick: (song: Song) => void;
  label: string;
}

function fmtNum(num: string) {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function SongCard({ song, onClick, label }: Props) {
  return (
    <Card className="h-100" bg="light">
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Text>
          <a
            href={song.url}
            target="_blank"
            rel="noreferrer"
            className="text-dark"
          >
            <Card.Title>{song.name}</Card.Title>
          </a>
          <strong>Artist:</strong> {song.artist.name}
          <br />
          <strong>Listeners:</strong> {fmtNum(song.listeners)}
          <br />
          <strong>Play Count:</strong> {fmtNum(song.playcount)}
          <br />
        </Card.Text>
        <Button
          onClick={() => onClick(song)}
          variant={label === "+" ? "success" : "danger"}
          size="sm"
          className="align-self-center"
          style={{ width: "40px" }}
        >
          {label}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SongCard;
