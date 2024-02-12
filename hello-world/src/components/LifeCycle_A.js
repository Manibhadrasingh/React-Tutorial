import React, { Component } from 'react';
import LifeCycle_B from './LifeCycle_B';

class LifeCycle_A extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
    console.log("LifeCycle A of Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle A of getDerivedState");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA of componentDidMount");
  }
  shouldComponentUpdate(){
    console.log("LifeCycle A shouldComponent");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevstate){
    console.log("LifeCycle A of getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(){
    console.log("LifeCycle A of componentDidUpdate");

  }

  changeState = () =>{
    this.setState({
        name:'Raghuvanshi'
    })
  }

  render() {
    console.log("LifeCycle A render");
    return (
        <div>
      <div> LifeCycle_A </div>
      <button onClick={this.changeState}>Change State</button>
      <LifeCycle_B/>
      </div>
    );
  }
}

export default LifeCycle_A;
