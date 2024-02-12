import React, { Component } from "react";
import withCounter from "./withCounter";
// import UpdatedComponent from './withCounter'

class OnHover extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (

        <h2 onMouseOver={incrementCount}>OnHover {count} Times</h2>

    );
  }
}
export default withCounter(OnHover,10)
