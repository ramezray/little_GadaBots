import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { Container, Button, Card, CardTitle, CardText } from "reactstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

import API from "../../utils/API";

const mapStyles = {
  width: "100%",
  height: 350,
  display: "flex",
  flexFlow: "row nowrap",
  justifyContent: "center",
  padding: 0
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      activeMarkerId: "",
      botInfo: "",
      selectedId: null,
      InfoWindowBotName: "",
      InfoWindowBotImage: "",
      InfoWindowBotjournalEntry: "",
      InfoWindowBotLocation: ""
    };
  }

  //function when user click one of the marker
  onMarkerClick = id => (props, marker, e) => {
    // console.log("onMarkerClick", {
    //   selectedId: id,
    //   selectedPlace: props,
    //   activeMarker: marker,
    //   showingInfoWindow: true
    // });
    this.setState({
      selectedId: id,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    //to allow user close the marker and will trun show to false
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  createMarker = () => {
    if (this.props.botPlaces != null) {
      return this.props.botPlaces.map(botPlace => (
        <Marker
          key={botPlace._id}
          position={{ lat: botPlace.lat, lng: botPlace.lng }}
          onClick={this.onMarkerClick(botPlace._id)}
        />
      ));
    } else {
      return null;
    }
  };
  getOneBotInfo = () => {
    API.getBot(this.state.selectedId).then(res => {
      // console.log("getOneBotInfo got", res.data);
      this.setState({
        InfoWindowBotName: res.data.name,
        InfoWindowBotImage: res.data.checkIns[0].pic,
        InfoWindowBotjournalEntry: res.data.checkIns[0].journalEntry,
        InfoWindowBotLocation: res.data.checkIns.slice(-1)[0].location
      });
    });
    // .catch(err => console.log("getOneBotInfo error", err));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedId !== this.state.selectedId) {
      this.getOneBotInfo();
    }
  }

  componentDidMount() {
    this.getOneBotInfo();
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={1.25}
        style={mapStyles}
        initialCenter={{
          lat: 0,
          lng: 0
        }}
      >
        {this.createMarker()}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <Container className="m-2">
            <Card body>
              <CardTitle className="font-weight-bold">
                Hi My Name is {this.state.InfoWindowBotName}
              </CardTitle>
              <img
                style={{ width: 120, height: 150 }}
                src={this.state.InfoWindowBotImage}
                alt="Bot"
              />
              <CardText className="font-weight-bold text-capitalize">
                Bot's Journal Entry: {this.state.InfoWindowBotjournalEntry}
              </CardText>
              <CardText className="font-weight-bold text-capitalize">
                Last Location Visited: {this.state.InfoWindowBotLocation}
              </CardText>
              <Container>
                <Router>
                  <Link
                    to={`/botProfile/${this.state.selectedId}`}
                    state={this.state.selectedId}
                  >
                    <Button className="float-right btn-success">
                      View Bot
                    </Button>
                  </Link>
                </Router>
              </Container>
            </Card>
          </Container>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBAIKAtjZeY9SStYI_Dr7XDiALX17AkK0Y"
})(MapContainer);
