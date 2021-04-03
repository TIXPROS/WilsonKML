import React, { Component } from 'react'
import ClientMain from "./components/ClientMain";
import './App.css';
import { Typography } from '@material-ui/core';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <ClientMain />
      </div>
    )
  }
}
