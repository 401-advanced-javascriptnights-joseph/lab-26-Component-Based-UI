import React from "react";
import "./words.scss";

class Words extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: "Enter text below to change me!"
    };
  }

  handleWord = e => {
    let words = e.target.value;
    this.setState({ words });
  };

  handleClick = e => {
    e.preventDefault();
    let words = this.state.words
      .split("")
      .reverse()
      .join("");
    this.setState({ words });
  };

  render() {
    return (
      <div id="words">
        <h3>{this.state.words}</h3>
        <input onChange={this.handleWord} />
        <button onClick={this.handleClick}>Reverse</button>
      </div>
    );
  }
}

export default Words;
