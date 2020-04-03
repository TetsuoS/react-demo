import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

ReactDOM.render(
    React.createElement(
        'p',
        { className: 'Hello' },
        'Hello World!'
    ),
    document.getElementById('content')
);

const server = 'http://localhost:8080/';
 
class Greeting extends Component {
  constructor() {
    super();
    this.state = {
      status: false,
      result: '',
    };
 
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(event) {
    axios.get(server)
      .then((res) => {
        this.setState({
          status: true,
          result: res.data
        });
        console.log(this.state);
      })
      .catch((e) => {
        console.error(e);
        this.setState({
          status: false,
          result: e,
        });
      });
  }
  render() {
    const result = (this.state.status) ? (<div>{this.state.result}</div>) : (<div>Not Yet</div>);
    return (
      <div>
        <button onClick={this.handleClick}>Get Data</button>
        {result}
      </div>
    );
  }
}

export default Greeting;
