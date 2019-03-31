import React, { Component } from "react";
import API from "../../utils/API";
import MapContainer from "../GoogleMap/GoogleMap";
import Geocode from "react-geocode";

class BotsOnMap extends Component {
  //Setting a state for ver that will hold bots and places
  state = {
    // saveBots is an array of objects with the structure:
    // "userid": [],
    // "_id": "5c9d706d4a3b0d6818a11bec",     ID of the BOT
    // "name": "test-1",
    // "checkIns": [{
    //   "date": "2019-03-29T01:10:05.173Z",
    //   "_id": "5c9d706d4a3b0d6818a11bed",    ID of the CHECKIN
    //   "pic": "https://steembottracker.com/img/bot_logo.png",
    //   "location": "Everett, WA",
    //   "journalEntry": "NOW"
    // }],
    saveBots: [],
    // botPlaces is an array of objects with the structure:
    // _id: botCityAndId[i].botsId,            ID of the BOT
    // lat: lat,
    // lng: lng
    botPlaces: []
  };

  // API call to get all saved bots and store it on saveBots array
  getSavedBots = () => {
    API.getSavedBot()
      .then(res =>
        this.setState({
          saveBots: res.data
        })
      )
      .then(() => {
        console.log("saveBots", this.state.saveBots);
        this.getLatAndLng();
      })
      .catch(err => console.log(err));
  };

  //here is a function to grab city name and convert it to lat and lng
  getLatAndLng = () => {
    let botCityAndId = this.state.saveBots.map(bot => ({
      botsId: bot._id,
      location: bot.checkIns.map(checkin => checkin.location)
    }));
    Geocode.setApiKey("AIzaSyBAIKAtjZeY9SStYI_Dr7XDiALX17AkK0Y");

    Object.keys(botCityAndId).map(i => {
      return Geocode.fromAddress(botCityAndId[i].location).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          console.log(lat, lng);
          this.setState({
            botPlaces: this.state.botPlaces.concat({
              _id: botCityAndId[i].botsId,
              lat: lat,
              lng: lng
            })
          });
        },
        error => {
          console.error(error);
        }
      );
    });
  };

  componentDidMount() {
    this.getSavedBots();
  }

  render() {
    return (
      <div>
        <MapContainer
          botPlaces={this.state.botPlaces}
          saveBots={this.state.saveBots}
        />
      </div>
    );
  }
}

export default BotsOnMap;
