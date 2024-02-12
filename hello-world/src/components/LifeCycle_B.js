import React, { Component } from 'react';

class LifeCycle_B extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
    console.log("LifeCycle B of Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle B of getDerivedState");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle B of componentDidMount");
  }
  shouldComponentUpdate(){
    console.log("LifeCycle B shouldComponent");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevstate){
    console.log("LifeCycle B of getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(){
    console.log("LifeCycle B of componentDidUpdate");

  }

  
  

  render() {
    console.log("LifeCycle B render");
    return (
      <div>
        LifeCycle_B
      </div>
    );
  }
}

export default LifeCycle_B;
