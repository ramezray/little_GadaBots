import React, { Component } from "react";
import BotsOnMap from "../components/BotsOnMap/BotsOnMap";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { Button } from "reactstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container row">
        <div className="card col-md-4">
          <div className="card-body">
            <h4 className="card-title">Welcome to GadaBots!</h4>
            <p className="card-text">
              You've found a place where you can create your own little robot (a
              GadaBot)and send it on an incredible adventure around the world!
              What's more, you'll be able to track and see all the locations
              your little GadaBot visits and learn about these places too.
            </p>
            <Router>
              <Link to={"/FAQ"}>
                <Button className="btn btn-secondary">
                  Read our FAQ to learn more
                </Button>
              </Link>
            </Router>
          </div>{" "}
        </div>
        <div className="col-8 col-md-8 col-sm-8 col-lg-8">
          <BotsOnMap />
        </div>
      </div>
    );
  }
}

export default Home;
