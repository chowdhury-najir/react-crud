import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const SanctionTypeCard = ({ sanctionTypeData }) => {
  console.log(sanctionTypeData);
  return (
    <Row>
      {sanctionTypeData &&
        sanctionTypeData.map((data) => (
          <Col md={4} key={data.id}>
            <Card style={{ width: "18rem" }} className="sanctionCard">
              <Card.Body>
                <Card.Title>{data.sanctionTypeName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
    </Row>
  );
};

export default SanctionTypeCard;
