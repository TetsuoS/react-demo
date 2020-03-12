import React, { Component } from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    React.createElement(
        'p',
        { className: 'Hello' },
        'Hello World!'
    ),
    document.getElementById('content')
);

class Greeting extends React.Component{
    render(){
        return <h1>Hi</h1>;
    }
}

export default Greeting;
