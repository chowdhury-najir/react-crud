import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  var date = new Date();
  var yearNow = date.getFullYear();

  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <div className="footer-copyright" data-test="copyright">
            Copyright © {yearNow} ASA International. All Rights Reserved.
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
