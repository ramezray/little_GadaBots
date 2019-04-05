import React, { Component } from "react";
import { Button } from "reactstrap";
import API from "../../utils/API";
import ReactS3Uploader from "react-s3-uploader";

class UpdateUser extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    //console.log(props);
    this.state = {
      show: false,
      userid: props.user._id,
      name: props.user.name,
      currentPassword: "",
      newPassword: "",
      newPasswordCheck: "",
      photo: ""
    };
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

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    switch (event.target.name) {
      case "nameUpdate":
        API.updateName(this.state.userid, this.state.name);
        break;
      case "photoUpdate":
        // code block
        alert("new photo submit clicked");
        break;

      case "close":
        // code block
        this.setState({
          show: false
        });
        break;
      default:
      // code block photoUpdate
    }
  };

  render() {
    // console.log(this.state)
    return (
      <>
        <Button onClick={this.handleShow} href="#" className="btn btn-success">
          Update Profile
        </Button>
        <br />
        <br />

        {this.state.show ? (
          <div className="card">
            <div className="card-body">
              <div className="update-user">
                <form>
                  <div className="form-row align-items-center">
                    <label>Change your Name</label>
                    <input
                      className="form-control"
                      id="name-update"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                    <br />
                    <br />
                    <br />
                    <button
                      name="nameUpdate"
                      type="submit"
                      className="btn btn-primary"
                      onClick={this.handleFormSubmit}
                    >
                      Update name
                    </button>
                  </div>
                  <br />
                  <div>
                    <label>Change your profile pic</label>
                    <ReactS3Uploader
                      signingUrl="/s3/sign"
                      onFinish={req => {
                        API.updateUserImage(this.state.userid, req.publicUrl);
                      }}
                    />
                  </div>
                  <br />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    name="close"
                    onClick={this.handleClose}
                  >
                    Close
                  </button>
                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
        ) : (
          <br />
        )}
      </>
    );
  }
}

export default UpdateUser;
