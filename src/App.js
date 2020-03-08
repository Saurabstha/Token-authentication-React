import React, { Component } from 'react'
import './App.css'
import { Link, Switch, Route } from 'react-router-dom'
import Login from './components/Login.js'
import Admin from './components/Admin'
import Logout from './components/Logout'


class App extends Component {
  render() {
    return (
      // <h1>Hello</h1>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/logout" component={Logout}></Route>

      </Switch>      
    );
  }
}

export default App
