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
    <Card className="h-100">
      <Card.Body>
        <a
          href={song.url}
          target="_blank"
          rel="noreferrer"
          className="text-dark"
        >
          <Card.Title>{song.name}</Card.Title>
        </a>
        <Card.Text>
          <strong>Artist:</strong> {song.artist.name}
          <br />
          <strong>Listeners:</strong> {fmtNum(song.listeners)}
          <br />
          <strong>Play Count:</strong> {fmtNum(song.playcount)}
          <br />
          <Button
            onClick={() => onClick(song)}
            variant={label === "+" ? "success" : "danger"}
          >
            {label}
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SongCard;
