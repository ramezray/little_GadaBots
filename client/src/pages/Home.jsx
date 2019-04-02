import React, { Component } from "react";
import BotsOnMap from "../components/BotsOnMap/BotsOnMap";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container row">
        <div className="card col-md-4">
          <div className="card-body">
            <h4 className="card-title">HOW TO USE OUR APP</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
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
