import React, { Component } from "react";
import {
    Card,
    Container,
    Row,
    Col,
    CardTitle,
    CardText,
    Button
  } from "reactstrap";

class botPorfile extends Component {
  render() {
    return (
        <Container>
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default botPorfile;
