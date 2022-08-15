import { Component } from 'react'

class App extends Component {
  // los state los podemos pasar como propiedades a los componentes
  state = {
    valor: 3,
    className: 'clase',
  }

  // el render se ejecuta en dos condiciones, si cambia es estado del componente
  // o si un componente padre a sido llamado
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hello World!</p>
        <button
          className={`${this.state.className}`}
          onClick={() => this.setState({valor: 2})}>
          Enviar
        </button>
      </div>
    );
  }
}

export default App;
