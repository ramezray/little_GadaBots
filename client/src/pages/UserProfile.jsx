import React, { Component } from "react";
import CheckIn from "../components/CheckIn";
import UpdateUser from "../components/UpdateUser";
import CreateGadaBot from "../components/CreateGadaBot";
import testsBots from "./testBots.json";
// import API from "../utils/API";

import {
  Card,
  Container,
  Row,
  Col,
  CardTitle,
  CardText,
  CardImg,
  CardBody
} from "reactstrap";

import { connect } from "react-redux";
import PropTypes from "prop-types";

class UserProfile extends Component {
  state = {
    bots: testsBots
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  componentDidMount() {
    console.log(this.props.auth);
    //     API.getBotsByUser(this.props.auth).then(res => {
    //         this.setState(
    //           {bots: res.data});
    //     }).catch( error => console.log(error))
  }

  render() {
    // console.log(this.props.auth);
    const { user } = this.props.auth;

    // Don't render until the user is available
    if (!user) {
      return <h5>Please log in to see this page</h5>;
    }

    return (
      <Container>
        <br />

        <center>
          <h1>{`Welcome ${user.name}`}!</h1>
          <CheckIn />
          <CreateGadaBot />
          <br />
          <br />
        </center>
        <Row>
          <Col sm="4">
            <Card>
              <CardImg
                top
                width="100%"
                src="https://steembottracker.com/img/bot_logo.png"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <h5>Your Info</h5>
                </CardTitle>
                <CardText>Name: {user.name}</CardText>
                <CardText>Email: {user.email}</CardText>
                <UpdateUser user={user} />
              </CardBody>
            </Card>
          </Col>
          <Col sm="8">
            <Card body>
              <CardTitle>
                <h4>Your GadaBot(s)</h4>
              </CardTitle>

              <ul>
                {this.state.bots.map(bot => (
                  <li className="list-group-item list-group-item-action">
                    <div key={bot.id}>
                      <div className="row">
                        <div className="col-3">
                          <img
                            className="card-img-top"
                            src={bot.checkIns[0].pic}
                            alt={bot.name}
                          />
                        </div>

                        <div className="col-9">
                          <div className="card-title">
                            {" "}
                            <h1>{bot.name}</h1>
                          </div>
                          <p>
                            <strong>Hometown: </strong>
                            {bot.checkIns[0].location}{" "}
                          </p>
                          <p>
                            <strong>Created Date: </strong>
                            {bot.checkIns[0].date}{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(UserProfile);
