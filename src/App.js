import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import HogIndex from "./components/HogIndex"
import Options from "./components/Options"
//import Tile from "./components/Tile"

class App extends Component {
  constructor (props) {
    super(props)
    this.state= {};
  }

  URL = "http://localhost:3000/hogs"

  get = (url) => {
    return fetch(url).then(response=> response.json()).then(hogs => this.setState({hogs}))
  }

  componentDidMount = () => { 
    this.get(this.URL) 
    console.log("App mounted")
  }
  
  handleGreased = () => {
    console.log("grease")
    this.setState({
      greased: !this.state.greased
    })
  }

  handleAZ = () => {
    console.log("AZ")
    this.setState({
      display: "AZ"
    })
  }

  handleWeight = () => {
    console.log("weight")
    this.setState({
      display: "weight"
    })
  }

  filterHogs = () => {
    let defaultHogs = this.state.hogs
    if (this.state.display) {
      defaultHogs = this.state.hogs.sort((a,b) => 
       this.state.display === "AZ" ? 
       a.name.localeCompare(b.name) :
       a.weight - b.weight
      );
    }
    return this.state.greased
      ? defaultHogs.filter(hog => hog.greased)
      : defaultHogs
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {/* Filtering options */}
        <Options handleWeight={this.handleWeight} handleAZ={this.handleAZ} handleGreased={this.handleGreased} />
        <div className ="ui grid container">
        <HogIndex hogsList={this.filterHogs()} />
        </div>

      </div>
    );
  }
}

export default App;
