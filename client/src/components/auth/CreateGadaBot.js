import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  NavLink,
  Alert
} from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';


class CreateGadaBot extends Component {
  constructor(props) {
    super(props);
    
        this.state = {
        modal: false,
        name: "",
        homeTown: "",
        journal: "", 
        photo: "",
        msg: null
      };
    };
  

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

     if (this.state.name && this.state.homeTown) {

      console.log(`name: ${this.state.name}` )
      console.log(`homeTown: ${this.state.homeTown}` )
      console.log(`jounal: ${this.state.jounal}` )


      this.setState({
            name: "",
            homeTown: "",
            journal: ""
          })

  
      } else {
          alert("Please give your GadaBot a name and Home Town.");
      }

     }

  render() {
    return (

          <div>
        <NavLink onClick={this.toggle} href='#'>
          Create a GadaBot
        </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Create a GadaBot</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color='danger'>{this.state.msg}</Alert>
            ) : null}
              
          <form>
                <div className="form-group">
                  <label>Name your GadaBot</label>
                    <input className="form-control" 
                    id="gaddaBot-name"
                    placeholder="Gadder"
                    name="name" 
                    value={this.state.name}  
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label>
                    Where is your Gada-Bot now?
                  </label>
                    <input  
                    className="form-control" 
                    id="gaddaBot-homeTown"
                    placeholder="your address here"
                    name="homeTown"
                    value={this.state.homeTown} 
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label>
                    Write a Journal Entry for your GadaBot
                  </label>
                  <textarea  
                  className="form-control" 
                  id="journal" 
                  placeholder="Today we went to the park."
                  name="journal" 
                  value={this.state.journal} 
                  onChange={this.onChange}/>
                </div>
              <div className="form-group">
                <div className="custom-file">
                  <input type="file" 
                  className="custom-file-input" 
                  id="customFile" 
                  name="photo"/>
                  <label 
                  className="custom-file-label" 
                  name="photo" >Upload a Pic
                  </label>
                </div>
              </div>
                <button 
                type="submit" 
                className="btn btn-primary"
                onClick={this.onSubmit}
                >Create GadaBot</button>
              </form>

          </ModalBody>
        </Modal>
      </div>
   
    );
  }
}

const mapStateToProps = state => ({
 isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default CreateGadaBot 
connect(mapStateToProps, 
{ login, clearErrors })(CreateGadaBot);
