import React, { useEffect } from 'react'
import TodoList from './Home/Todo/TodoList'
import Context from './context'
import Loader from './Loader'
import firebase from 'firebase'
import fire from './Home/config/Fire'
import { Component } from 'react';
import Home from './Home/Home'
import Login from './Login/Login'
import Main from './Main'
class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: false,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log('login')
      console.log(this.state.user)
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
      console.log('asjd')
      console.log(this.state.user)
    });
  }
  render() {
    return (
     <div>{this.state.user ?  (<Main />) : (<Login />)}</div>)
}
}


export default App
