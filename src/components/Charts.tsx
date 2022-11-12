import { Card, Col, Row } from "react-bootstrap";
import Song from "../types/Song";

interface Props {
  songs: Song[];
}

function fmtNum(num: string) {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Charts({ songs }: Props) {
  return (
    <Row xs={2} md={3} lg={4} className="g-4">
      {songs.map((song) => (
        <Col>
          <Card className="h-100">
            {/* <Card.Img variant="top" src={song.image[2]["#text"]} /> */}
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
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Charts;
