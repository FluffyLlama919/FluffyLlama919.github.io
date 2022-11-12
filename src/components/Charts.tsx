import { Card, Col, Row } from "react-bootstrap";
import Song from "../types/Song";

interface Props {
  songs: Song[];
}

function Charts({ songs }: Props) {
  return (
    <Row xs={2} md={4} className="g-4">
      {songs.map((song) => (
        <Col>
          <Card></Card>
        </Col>
      ))}
    </Row>
  );
}

export default Charts;
