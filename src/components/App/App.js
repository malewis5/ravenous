import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import { render } from "@testing-library/react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1>Ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

export default App;
