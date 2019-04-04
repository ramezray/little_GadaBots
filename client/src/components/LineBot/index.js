import React, { Component } from 'react';
import API from "../../utils/API";

class LineBot extends Component {

 constructor(props) {
    super(props);
    
        this.state = {
          show: this.props.submitted,
          bot: props.bot,
          userId: props.userId
      };
    };

  componentDidUpdate(prevProps) {
    console.log("new bot props:", this.props)
    // Typical usage (don't forget to compare props):
      if (prevProps !== this.props
         && this.props.submitted === true ) {
              this.setState(
                { show: true,
                bot_id: this.props.bot._id              
              }) 
            if (this.props.user) {
              this.props.user.bots.push(this.props.bot._id)
              API.updateUserBots(this.state.userId, this.props.user.bots) 
            }else 
            console.log("could not find usr")
            }
  }
        
    
 handleClose() {
    this.setState({ show: false });
  }

  render() {
    console.log(this.props)
    return (
    <div>
     {this.state.show ?
      <div className="card">
      <div className="card-body">
      
        <img className="card-img-top" alt="Your New GadaBot" src="GadaBotLine.svg" />
        <h2 className="card-title">Your New GadaBot</h2>
        <h5>Congrats! You grated a new GadaBot</h5>
          <p>Your GadaBots Traking ID is: {this.state.bot_id}</p>
          <p><strong> Write this on the back of your Bot! </strong></p>
          </div>
          </div>
        
        :  <span></span> }
        </div>
    );
  }
}

export default LineBot;