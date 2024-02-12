import React, { Component } from "react";
// import RegularComponent from "./RegularComponent"; 
// import PurComponent from "./PurComponent";
import MemoComponent from "./MemoComponent";

class ParenComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Manibhadra',
    };
  }
  componentDidMount() {
    setInterval(() => {
      // You need to use setState to update the state
      this.setState({ name: 'Manibhadra' });
    }, 2000);
  }
  render() {
    console.log("ParentComponent")
    return (
      <div>
        Parent Component
        <MemoComponent name={this.state.name}/>  
        {/* <RegularComponent name={this.state.name}></RegularComponent>
        <PurComponent name={this.state.name}></PurComponent>  */}
      </div>
    );
  }
}
export default ParenComponent;
