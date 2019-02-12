import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'

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
class Clock1 extends React.Component {
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


class Clock2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <h2>现在是{this.state.date.toLocaleTimeString()}</h2>
    )
  }
}


class WebSite extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '123',
      site: 'https://www.runoob.com'
    }
  }

  render() {
    return (
      <div>
        <Name name={this.state.name} />
        <Link site={this.state.site} />
      </div>
    )
  }
}

class Name extends React.Component {
  render() {
    return (
      <h1>{this.props.name}</h1>
    )
  }
}

Name.propTypes = {
  name: PropTypes.string
}

class Link extends React.Component {
  render() {
    return (
      <h1>{this.props.site}</h1>
    )
  }
}


class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {isToggleOn: true}
    // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick(i, e) {
    alert(i)
    console.log(e)
    e.preventDefault()
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this, i)}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}


function UserGreeting(props) {
  return <h1>欢迎回来！</h1>
}

function GuestGreeting(props) {
  return <h1>请先注册！</h1>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>退出。。。</button>
}

function LoginButton(props) {
  return <button onClick={props.onClick}>登录。。。</button>
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = {isLoggedIn: true}
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn

    let button = null
    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />
    // }

    isLoggedIn ? 
    button = <LogoutButton onClick={this.handleLogoutClick}/> 
    : button = <LoginButton onClick={this.handleLoginClick}/>

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}


function Mailbox(props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>Mailbox!</h1>
      {unreadMessages.length > 0 &&
        <div>
          <p>
          您有{unreadMessages.length}条未读信息。
          </p>
          <MessegerList messeger={messeger} />
        </div>
      }
    </div>
  )
}

function MessegerList(props) {
  const messeger = props.messeger
  const messegerList = messeger.map((messeger) =>
    <li key={messeger.toString()}>
      {messeger}
    </li>
  )
  return (
    <ul>{messegerList}</ul>
  )
}

function WarningBanner(props) {
  if (!props.warn) {
    return null
  }

  return (
    <div>
      警告！！！
    </div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super()
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this)
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }))
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? '隐藏' : '显示'}
        </button>
      </div>
    )
  }
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

class Counter extends React.Component{
  constructor(props) {
    super(props)
    this.state = {clickCount: 0}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(function(state) {
      return {clickCount: state.clickCount + 1}
    })
    this.forceUpdate(function() {
      console.log('forceUpdate')
    })
    console.log('findDOMNode', ReactDOM.findDOMNode(this.refs.tip))
    // console.log('isMounted', ReactDOM.isMounted())
  }

  render() {
    return (<h2 onClick={this.handleClick}>点击次数为：{this.state.clickCount}</h2>)
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
const messeger = ['React', 'Vue', 'Angular']
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
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
          <Clock1 date={new Date()}/>
          <Clock2 />
          <Clock2 />
          <div>{arr}</div>
          <WebSite />
          <Toggle />
          {/* <Greeting isLoggedIn={true}/> */}
          <LoginControl />
          <Mailbox unreadMessages={messeger}/>
          <Page />
          <Blog posts={posts} />
          <Counter />
        </header>
      </div>
    );
  }
}

export default App;
