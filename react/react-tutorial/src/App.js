import React from 'react';
import Search from './components/Search';
import axios from 'axios';
import './App.css';

// function HolaMundo(props) {
//   return (
//     <div id="hola">
//     <h3>{props.subtitle}</h3>
//     {props.mytext}</div>
//   )
// }
//


class App extends React.Component {
  render() {
    return (
      <div>
        <Search />
        <Car />
      </div>
    );
  }
}

class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "yellow"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}



export default App;
