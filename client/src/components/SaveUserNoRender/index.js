import React, { Component } from 'react';
import API from "../../utils/API";

class SaveUserNoRender extends Component {

 constructor(props) {
    super(props);
    
        this.state = {
          bot: props.bot,
          userId: props.userId
      };
    };

  componentDidUpdate(prevProps) {
    
    // Typical usage (don't forget to compare props):
      if (prevProps !== this.props
         && this.props.submitted === true ) {
              this.setState(
                {bot_id: this.props.bot._id              
              }) 
            if (this.props.user.bots) {
              console.log("props inside of saveuser:", this.props)
              this.props.user.bots.push(this.props.bot._id)
              API.updateUserBots(this.state.userId, this.props.user.bots) 
            }else 
            console.log("could not find usr")
            }
  }

  render() {
    return (
    <span></span>
    );
  }
}

export default SaveUserNoRender;