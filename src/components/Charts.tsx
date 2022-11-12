import { Card, Col, Row } from "react-bootstrap";
import Song from "../types/Song";

interface Props {
  songs: Song[];
}

function Charts({ songs }: Props) {
  return (
    <Row xs={2} md={3} lg={4} className="g-4">
      {songs.map((song) => (
        <Col>
          <Card className="h-100">
            <Card.Img variant="top" src={song.image[2]["#text"]} />
            <Card.Body>
              <Card.Title>{song.name}</Card.Title>
              <Card.Text>
                <strong>Artist:</strong> {song.artist.name}
              </Card.Text>
              <Card.Text>
                <strong>Listeners:</strong> {song.listeners}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Charts;
