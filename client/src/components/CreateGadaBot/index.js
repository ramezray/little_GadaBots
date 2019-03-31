import React, { Component } from 'react';
//import './createGadaBot.css';
import API from '../../utils/API'
import {
  Button,

} from 'reactstrap';


class CreateGadaBot extends Component {
  
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        name: "",
        homeTown: "",
        journal: "", 
        photo: "https://ap.rdcpix.com/1582692153/db1aa4a8982b018920926013ff2577f1l-m0xd-w480_h480_q80.jpg"
      };
    }

    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
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

      console.log(`name: ${this.state.name}` )
      console.log(`homeTown: ${this.state.homeTown}` )
      console.log(`jounal: ${this.state.journal}` )

    const gadaBot = {
          name:this.state.name, 
          location: this.state.homeTown,
          journalEntry: this.state.journal,
          photo:this.state.photo
       }
      console.log(gadaBot)
       //create a new bot
      API.saveBot(gadaBot) 
       
          .then(this.setState({
            homeTown: "",
            journal: "", 
         //   photo: ""
                }))  
       .catch(err => console.log(err));
  
      } else {
          alert("Please give your GadaBot a name and Home Town.");
      }

     }

  render() {
    return (

      <>
      <Button onClick={this.handleShow} href='#'>
      Create a GadaBot
    </Button>

    {this.state.show ?
        <div className="card  w-75">
          <div className="card-body">
            <div className="create-gadder">
                <form>
                <div className="form-group">
                  <label>Name your GadaBot</label>
                    <input className="form-control" 
                    id="gaddaBot-name"
                    placeholder="Gadder"
                    name="name" 
                    value={this.state.name}  
                    onChange={this.handleInputChange}/>
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
                    onChange={this.handleInputChange}/>
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
                  onChange={this.handleInputChange}/>
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
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleFormSubmit}
                >Create a GadaBot </button>
              </div>
             </form>
             <button type="button" 
              className="btn btn-secondary" 
              name="close"
              onClick={this.handleClose}
              >close</button>
             </div>
        </div>
      </div>
      : <span> </span>      }
        
        </>
    );
  }
}

export default CreateGadaBot;
 
