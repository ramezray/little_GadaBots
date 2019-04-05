import React, { Component } from "react";
import BotsOnMap from "../components/BotsOnMap/BotsOnMap";
import { Button } from "reactstrap";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container row">
        <div className="card col-lg-4 ">
          <div className="card-body">
            <h4 className="card-title">Welcome to GadaBots!</h4>
            <p className="card-text">
              You've found a place where you can create your own little robot (a
              GadaBot)and send it on an incredible adventure around the world!
              What's more, you'll be able to track and see all the locations
              your little GadaBot visits and learn about these places too.
            </p>

            <Button href="/FAQ" className="btn btn-success float-right">
              Read our FAQ to learn more
            </Button>
          </div>{" "}
        </div>

        <div className="col-lg-8 mt-2 ">
          <BotsOnMap />
        </div>
      </div>
    );
  }
}

export default Home;
