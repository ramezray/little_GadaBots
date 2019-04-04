import React, { Component } from "react";
import CheckIn from "../components/CheckIn";
import FunFact from "../components/FunFact";
import Canvas from "../components/Canvas";
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
          Bot_Image: res.data.checkIns[0].pic, 
          checkIns: res.data.checkIns
        });
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    if (this.state.bot_Id === null) {

      this.getOneBotForBotProfile();
      console.log("the sate is:", this.state)
    }
  }


  render() {
    return (
      <div className="container text-capitalize">
        <CheckIn />
        <br />
        <br />
        <div alt="becauseItGotMad">
          <div className="card">
            <div className="row">
              <div className="col-3">
                <Canvas  src={this.state.Bot_Image} alt={this.state.bot_Name}></Canvas>
              </div>
              <div className="card-body col-9">
                <div className="card-title">
                  {" "}
                  <h1>{this.state.bot_Name}</h1>
                </div>
                <p>
                  <strong>Hometown: </strong>
                  {this.state.location}
                  {console.log("This is the town home", this.state.location)}
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
         {this.state.checkIns ? <ul className="list-group">
            {this.state.checkIns.map(checkIn => (
              <FunFact
                key={checkIn._id}
                pic={checkIn.pic}
                location={checkIn.location}
                date={checkIn.date}
                journalEntry={checkIn.journalEntry}
              />
            ))}
          </ul> : <span></span>} 
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default App;
