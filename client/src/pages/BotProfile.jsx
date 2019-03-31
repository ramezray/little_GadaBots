import React, { Component } from "react";
//import './createGadaBot.css';
import CheckIn from "../components/CheckIn";
import FunFact from "../components/FunFact";
//import UpdateUser from './components/updateUser'
import CreateGadaBot from "../components/CreateGadaBot";
import testBots from "./testBots.json";
//import UpdateUser from './components/modals/updateUsesr'
import API from "../utils/API";
import funFacts from "wtf_wikipedia"

const wtf = require("wtf_wikipedia");

class App extends Component {
  state = {
    // will match pot with the botId here
    bot_Id: null,
    bot_Name: "",
    sentence: {},
    location: null,
    Created_Date: "",
    Bot_Image: ""
  };

  getOneBotForBotProfile = () => {
    console.log("params", this.props.match.params);
    let idOfBotWeAreLookingFor = this.props.match.params.id;
    const apiPromise = API.getBot(idOfBotWeAreLookingFor);
    console.log("apiPromise", apiPromise);
    apiPromise
      .then(res => {
        console.log("API call returned", res);
        this.setState({
          bot_Id: res.data._id,
          location: res.data.location,
          bot_Name: res.data.name,
          Created_Date: res.data.checkIns[0].date,
          Bot_Image: res.data.checkIns[0].pic
        });
      })
      .then(() =>
        console.log("Trying to know what API getting", this.state.bot_Id)
      )
      .catch(error => console.log(error));
  };
  

  
  componentDidMount() {
    console.log("componentDidMount");
    this.getOneBotForBotProfile();
  }

  creatingCardOfTheBot = () => {};

  handleFactShow(city3) {
    // const city="New York City"; //works
    // const city2="Edmonds, Washington" //works
    // const city3="Arendal" //works

    wtf.fetch(city3).then(doc => {
      doc.sentences(0).text();
      //concatenate or loop to tailor blurb length
      console.log(doc.sentences(0).text());

      this.setState({ sentence: doc.sentences(0).text() });
    });
  }

  render() {
    return (
      <div className="container">
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
                  {this.state.location}{" "}
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
          {/* <ul className="list-group">
            {this.state.bot.checkIns.map(checkIn => (
              <FunFact
                pic={checkIn.pic}
                location={checkIn.location}
                date={checkIn.date}
                journalEntry={checkIn.journalEntry}
              />
            ))}
          </ul> */}
        </div>
      </div>
    );
  }
}

export default App;
