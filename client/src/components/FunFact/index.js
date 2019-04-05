import React, { Component } from "react";
const wtf = require("wtf_wikipedia");

class FunFact extends Component {
  state = {
    sentence: "loading ..."
  };

  componentDidMount() {
    this.getFunnyFacts();
  }

  //get funny facts
  getFunnyFacts = () => {
    wtf
      .fetch(this.props.location)
      .then(res => {
        if (res !== null) {
          let factsToDisplay = res.data.sections[0].data.paragraphs[0].data.sentences.map(
            facts => facts.data.text
          );
          this.setState({
            sentence: factsToDisplay
          });
        }
      })
      .catch(
        this.setState({
          sentence:
            "Sorry We Couldn't Find Any Facts To Display For This Location"
        })
      );
  };

  render() {
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-3">
            <img
              className="card-img-top"
              src={this.props.pic}
              alt={this.props.location}
            />
          </div>
          <div className="col-9">
            <div className="card-body">
              <h4>About {this.props.location}</h4>
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
