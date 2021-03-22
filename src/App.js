import React, { Component } from 'react'
import ClientMain from "./components/ClientMain";
import Main from "./components/Main";
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      version: 1
    }
  }

  componentDidMount() {
    document.title = 'Wilson KML';
  }
  render() {
    return (
      <div className="App">
        {
          this.state.version === 1 ?
            <ClientMain /> :
            <Main />
        }
        <span style={{ fontSize: "12px" }} >powered by <a href = "https://tixpros.pro/" target="_blank" >TixPros</a> - V{this.state.version}</span>
        <br />
        <button
          style={{ fontSize: 12, padding: 2 }}
          onClick={() => { this.setState({ version: this.state.version === 1 ? 2 : 1 }) }} >Voir la version {this.state.version === 1 ? 2 : 1}</button>
      </div>
    )
  }
}
