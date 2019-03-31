import React, { Component } from 'react';
import API from '../../utils/API'
import {
  Button,
 } from 'reactstrap';


class CheckIn extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {          
      show: false,
      id: "",
      location: "",
      journal: "", 
      photo: ""
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }


onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();


      API.getBot(this.state.id).then(res => { 
        if (res.data) {
          this.setState(
            {bot: res.data});

            if(!this.state.location) {
              alert("please add a new location")
           }
       
            else  {
            const newCheckIn = {
                 location: this.state.location,
                 journalEntry: this.state.journal,
                 photo:this.state.photo
              }
              
            console.log("CheckIn:" + newCheckIn.location);
           console.log("Bot:" + this.state.bot);
            this.state.bot.checkIns.push(newCheckIn)
            console.log("data to be stored: "+ this.state.bot)
          API.checkInBot(this.state.id, this.state.bot).catch( error => console.log(error));
       
                this.setState({
                         id: "",
                         location: "",
                         journal: "",
                         show: false,
                       })
                   
            }
        } else  {
          alert("please enter a valid GadaBot ID")
        }

      }).catch( error => console.log(error))
  
    //let c = ? //setts the value of the number of checkins. In the future the c will be equal to the number of checkins in the checkin array
    
  

  }
  render() {
    return (
       <>

          <Button onClick={this.handleShow} href='#'>
           Check In GadaBot
          </Button>
        {this.state.show ?

      
       <div className="card  w-75">
       <div className="card-body">
                <form>
                <div className="form-group">
                  <label>Enter Your GaddaBot's ID</label>
                    <input className="form-control" 
                    id="gaddaBot-id"
                    placeholder="1234..."
                    name="id" 
                    value={this.state.name}  
                    onChange={this.onChange}/>
                </div>
                <div className="form-group">
                  <label>
                    Where is your Gada-Bot now?
                  </label>
                    <input  
                    className="form-control" 
                    id="gaddaBot-location"
                    placeholder="your address here"
                    name="location"
                    value={this.state.location} 
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
                >Check In</button>
              </form>
              <button type="button" 
              className="btn btn-secondary" 
              name="close"
              onClick={this.handleClose}
              >Close</button>
              </div>
           </div>  
       : <span> </span>    }
       
      </>
           
    );
  }
}

export default CheckIn;
