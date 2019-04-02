import React, { Component } from "react";
import CheckIn from "../components/CheckIn";
import FunFact from "../components/FunFact";
import CreateGadaBot from "../components/CreateGadaBot";
import API from "../utils/API";

class App extends Component {
  state = {
    bot_Id: null,
    bot_Name: "",
    sentence: {},
    location: "",
    Created_Date: "",
    Bot_Image: ""
  };

  getOneBotForBotProfile = () => {
    let idOfBotWeAreLookingFor = this.props.match.params.id;
    const apiPromise = API.getBot(idOfBotWeAreLookingFor);
    apiPromise
      .then(res => {
        this.setState({
          bot_Id: res.data._id,
          location: res.data.checkIns[0].location,
          bot_Name: res.data.name,
          Created_Date: res.data.checkIns[0].date,
          Bot_Image: res.data.checkIns[0].pic
        });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.getOneBotForBotProfile();
  }

  render() {
    return (
      <div className="container text-capitalize">
        <CheckIn />
        <CreateGadaBot />
        <br />
        <br />
        <div alt="becauseItGotMad">
          <div className="card">
            <div className="row">
              <div className="col-3">
                <img
                  className="card-img-top"
                  src={this.state.Bot_Image}
                  alt={"this.state.bot_Id.name"}
                />
              </div>
              <div className="card-body col-9">
                <div className="card-title">
                  {" "}
                  <h1>{this.state.bot_Name}</h1>
                </div>
                <p>
                  <strong>Hometown: </strong>
                  {this.state.location}
                </p>
                <p>
                  <strong>Created Date: </strong>
                  {this.state.Created_Date}{" "}
                </p>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="text-primary">
            <FunFact location={this.state.location} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
