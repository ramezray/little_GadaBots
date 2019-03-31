import React, { Component } from 'react';
//import CheckIn from '../CheckIn';
import testBots from "../../pages/testBots.json";
const wtf = require('wtf_wikipedia');


class FunFact extends Component {

  state = {
   // bot: testBots[0],
   // location: testBots[0].location,
    sentence: "loading ..."
  }
  
  componentDidMount() {
    
    //do the API req .then(function() => this.setState())
    //store in state  

    wtf.fetch(this.props.location).then(doc => {    
   
     var cityInfo = doc.sentences(0).text()+doc.sentences(1).text()+doc.sentences(2).text();
      //put in spaces between sentences

      this.setState({sentence: cityInfo});
  })

  }

  render() {
    return (
        // <CheckIn pic={checkIn.pic} location={checkIn.location} journalEntry={checkIn.journalEntry} />
        <li className="list-group-item">
          <div className="row">
            <div className="col-3">
              <img className="card-img-top" src={this.props.pic}
                alt={this.props.location} />
            </div>
            <div className="col-9">
              <div className="card-body">
                <h4>{this.props.location}</h4>
                <p className="card-text"> {this.props.journalEntry}</p>
                <small>{this.props.date}</small>
              </div>
            </div>
            <p>{this.state.sentence}</p>
          </div>
        </li>
    );
  }
}

export default FunFact;