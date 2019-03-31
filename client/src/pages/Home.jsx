import React, { Component } from "react";
import BotsOnMap  from "../components/BotsOnMap/BotsOnMap"

import {
  Card,
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
  Button,
  CardBody
} from "reactstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <Container >
        <Row>
          <Col lg="3">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>
                HOW TO USE OUR APP
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
          <Col lg="8">
            <CardBody>
            <BotsOnMap />
            </CardBody>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
