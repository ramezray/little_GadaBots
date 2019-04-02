import React, { Component } from "react";
const wtf = require("wtf_wikipedia");

class FunFact extends Component {
  state = {
    sentence: "loading ........"
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location !== this.props.location) {
      this.getFunnyFacts();
    }
  }

  //get funny facts
  getFunnyFacts = () => {
    this.props.location === ""
      ? this.setState({
          sentence:
            "Sorry We Couldn't Find Any Facts To Display For This Location"
        })
      : wtf
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
          <p>{this.state.sentence}</p>
        </div>
      </li>
    );
  }
}

export default FunFact;
