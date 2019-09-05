import React from "react";
import "./counter.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  decrement = e => {
    e.preventDefault();
    let count = this.state.count - 1;
    this.setState({ count });
  };

  increment = e => {
    e.preventDefault();
    let count = this.state.count + 1;
    this.setState({ count });
  };

  render() {
    let count = this.state.count;

    const style = {
      background: "yellow"
    };

    if (count < 0) {
      style.background = "red";
    }

    if (count > 0) {
      style.background = "green";
    }

    return (
      <div id="counter">
        <button onClick={this.decrement} id="decrement">
          -
        </button>
        <span style={style}>Count: {this.state.count} </span>
        <button onClick={this.increment} id="increment">
          +
        </button>
      </div>
    );
  }
}

export default Counter;
