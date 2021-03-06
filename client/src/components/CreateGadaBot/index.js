import React, { Component } from "react";
//import './createGadaBot.css';
import API from "../../utils/API";
import { Button } from "reactstrap";
import ReactS3Uploader from "react-s3-uploader";
import LineBot from "../LineBot";

class CreateGadaBot extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      userId: props ? props.user._id : "",
      user: props ? props.user : "",
      show: false,
      name: "",
      homeTown: "",
      journal: "",
      photo: "Gadabot.png",
      newBot: {},
      submitted: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  showNewBot() {
    return <LineBot botId={this.state.Id} />;
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (this.state.name && this.state.homeTown) {
      console.log(`name: ${this.state.name}`);
      console.log(`homeTown: ${this.state.homeTown}`);
      console.log(`jounal: ${this.state.journal}`);
      console.log(`photo: ${this.state.photo}`);

      const gadaBot = {
        userid: [this.state.userId],
        name: this.state.name,
        location: this.state.homeTown,
        journalEntry: this.state.journal,
        pic: this.state.photo
      };
      console.log(gadaBot);
      //create a new bot
      API.saveBot(gadaBot)
        .then(res => {
          this.setState({
            newBot: res.data
          });
        }) //.then(
        //  this.state.newBot._id
        //  ? API.updateUserBots(this.state.userId, [this.state.newBot])
        //  : console.log("did not update user bots. No bot ID \r", this.state.newBot )
        // )
        .then(
          this.setState({
            homeTown: "",
            journal: "",
            //   photo: "",
            show: false,
            submitted: true
          })
        )
        .catch(err => console.log(err));
    } else {
      alert("Please give your GadaBot a Name and Home Town");
    }
  };

  render() {
    return (
      <>
        <Button
          onClick={this.handleShow}
          className=" btn btn-success float-right mt-2"
        >
          Create a GadaBot
        </Button>

        {this.state.show ? (
          <div className="card  w-75">
            <div className="card-body">
              <div className="create-gadder">
                <form>
                  <div className="form-group">
                    <label>Name your GadaBot</label>
                    <input
                      className="form-control"
                      id="gaddaBot-name"
                      placeholder="Gadder"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Where is your GadaBot now?</label>
                    <input
                      className="form-control"
                      id="gaddaBot-homeTown"
                      placeholder="You Address Here"
                      name="homeTown"
                      value={this.state.homeTown}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Write a Journal Entry for your GadaBot</label>
                    <textarea
                      className="form-control"
                      id="journal"
                      placeholder="Memories from the trip.."
                      name="journal"
                      value={this.state.journal}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Upload photo</label>
                    <br />
                    <ReactS3Uploader
                      signingUrl="/s3/sign"
                      onFinish={req => {
                        this.setState({ photo: req.publicUrl });
                      }}
                    />
                    <img src={this.state.photo} alt="Bot" />

                    <Button
                      type="submit"
                      className="btn btn-primary btn-success mt-2"
                      onClick={this.handleFormSubmit}
                    >
                      Create a GadaBot{" "}
                    </Button>
                  </div>
                </form>
                <button
                  type="button"
                  className="btn btn-secondary float-right"
                  name="close"
                  onClick={this.handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <LineBot
              bot={this.state.newBot}
              submitted={this.state.submitted}
              userId={this.state.userId}
              user={this.state.user}
            />
          </div>
        )}
      </>
    );
  }
}

export default CreateGadaBot;
