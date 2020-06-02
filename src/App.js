import React, { Component } from 'react';
import './App.css';
import CircleSelector from './Components/CircleSelector/CircleSelector'
import Circles from './Components/Circles/Circles'


class App extends Component {

  state = {
    clicked: 1
  }

  handleClick = (btn) => {
    this.setState((state) => (
      {clicked: btn}
    ))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
          clicked={this.state.clicked} 
          handleClick={this.handleClick}/>
          <Circles 
          clicked={this.state.clicked}/>
        </main>
      </div>
    );
  }
}

export default App;