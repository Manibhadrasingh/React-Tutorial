import React, { Component } from "react";

class OnHoverTwo extends Component {
  render() {
    const { count, incrementCount } = this.props
    return <h1 onMouseOver={incrementCount}>Hover {count} Times</h1>;
  }
}
export default OnHoverTwo;
