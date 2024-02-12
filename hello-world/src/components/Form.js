import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      topic: "React"
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  // handleSubmit = event =>{
  //   alert(this.state.username)
  //   alert(this.state.comments)
  //   alert(this.state.topic)
  //   event.preventDefault();
  // }
  handleSubmit = event => {
  const { username, comments, topic } = this.state;
  alert(`${username}\n${comments}\n${topic}`);
  event.preventDefault();
}

  render() {
    return (
      <from onSubmit={this.handleSubmit} >
        <div>
          <label>Username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          ></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea type = "text"
            value={this.state.comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.handleTopicChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <button type="submit" onClick={this.handleSubmit} >Submit</button>
      </from>
    );
  }
}

export default Form;
