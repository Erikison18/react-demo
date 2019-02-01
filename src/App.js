import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 函数表示
 */
// function Clock(props) {
//   return (
//     <h2>现在是{props.date.toLocaleTimeString()}.</h2>
//   )
// }

/**
 * 创建React.Component的ES6类
 */
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h2 style = {myStyle}>现在是{this.props.date.toLocaleTimeString()}****</h2>
        <p className="num">{5+5}</p>
        <h3 style = {myStyle}>{i === 1 ? 'True' : 'False'}</h3>
      </div>
    )
  }
}

class Logo extends React.Component {
  render() {
    return <img src={this.props.logo} className="App-logo" alt="logo"/>
  }
}

var i = 2

var myStyle = {
  fontSize: 20,
  color: '#ff0000'
}

var arr = [
  <h4 key={1}>第一项</h4>,
  <h4 key={2}>第二项</h4>
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo logo={logo}/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            data-myattribute="somevalue"
          >
            Learn React
          </a>
          {/*注释：react组件*/}
          <Clock date={new Date()}/>
          <div>{arr}</div>
        </header>
      </div>
    );
  }
}

export default App;
