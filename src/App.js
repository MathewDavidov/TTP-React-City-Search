import React, { Component } from 'react';
import Search from "./components/Search"
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <div>
          <nav className="navbar navbar-dark bg-dark text-center">
            <span className="navbar-text text-white">City Search</span>
          </nav>
        </div>
        <Search />
      </>
    )
  }
}

export default App;