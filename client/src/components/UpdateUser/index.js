import React, { Component } from 'react';
import {
  Button,

} from 'reactstrap';
import API from '../../utils/API';

class UpdateUser extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    console.log(props);
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

  switch(event.target.name) {
      case "nameUpdate":
        API.updateName(this.state.userid, this.state.name);
        break;
      case "passwordUpdate":
        // code block
      if (this.state.newPassword === this.state.newPasswordCheck){
        alert("New password: "+ this.state.newPassword);
      }
        break;
    case "photoUpdate":
        // code block
        alert("new photo submit clicked");
        break;

        case "close":
        // code block
        this.setState({
          show: false,
        })
        break;
    default: 
          // code block photoUpdate
          

      }

  }

  render() {
    return (
      <>
      <Button onClick={this.handleShow} href='#'>
      Update Profile
    </Button>

    {this.state.show ?
        <div className="card  w-75">
          <div className="card-body">
            <div className="update-user">
              <form>

                <div className="form-row align-items-center">
                  <div class="col-7">
                    <label>Change your Name</label>
                    <input className="form-control"
                      id="name-update"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange} />
                  </div>
                  <div className="col-auto">
                  <br />
                  <button
                  name="nameUpdate"
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleFormSubmit}>Update name</button>
                  </div>
                </div>
                <br />
                <div className="form-row align-items-center">
                 <div className="col-6">
                  <label>
                    Enter Your Current Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="currentPassword"
                    name="currentPassword"
                    value={this.state.currentPassword}
                    onChange={this.handleInputChange} />
                    </div>

                <div className="col-6">
                  <label>
                    Enter a new Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={this.state.newPassword}
                    onChange={this.handleInputChange} />
                </div>

                <div className="col-6">
                <label>
                    Re-enter your new Password
                    </label>
                  <input
                    className="form-control"
                    type="password"
                    id="currentPasswordCheck"
                    name="newPasswordCheck"
                    value={this.state.newPasswordCheck}
                    onChange={this.handleInputChange} />
                  </div>
               
                <div className="col-6">
                    <br />
                    <button
                    name="passwordUpdate"
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.handleFormSubmit}>Update Password</button>
                  </div>
               </div>
              <br />
              <div className="form-row">
              <div className="col-8">
                <div className="custom-file">
                  <input type="file"
                    className="custom-file-input"
                    id="customFile"
                    name="photo" />
                  <label
                    className="custom-file-label"
                    name="photo" >Upload a Profile Pic
                  </label>
                </div>
                </div>
            
              <div className="col-4">
                <button
                  name="photoUpdate"
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleFormSubmit}
                >Update Picture </button>
              </div>
              </div>
              <button type="button" 
              className="btn btn-secondary" 
              name="close"
              onClick={this.handleClose}
              >Close</button>
              </form>
          </div>
        </div>
      </div>
      :  <span> </span>      }
       
      </>
    );
  }
}

export default UpdateUser;