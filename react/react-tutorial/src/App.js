import React from 'react';
import './App.css';

// function HolaMundo(props) {
//   return (
//     <div id="hola">
//     <h3>{props.subtitle}</h3>
//     {props.mytext}</div>
//   )
// }
//


class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({show: false})
  }

  render() {
    if (this.state.show) {
    return (
      <div id="root">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Cambiar estado</button>
          </div>
    )
  } else {
    return <h1>No hay nada que mostrar</h1>
  }
  }
}

function App() {
  return (
    <div>
      Este es mi componente:
      <Helloworld mytext="Hola otra vez a través de props"
      subtitle="Esto se ha escrito también con props" />
    </div>
  )
}



export default App;
