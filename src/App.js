import { Component } from 'react'

class Button extends Component {
  state = {}

  constructor(props) {
    super(props);
    console.log('Constructor', props);
  }

  render() {
    console.log('Ejecutando metodo render de Button');
    return (
      <button>Enviar</button>
    );
  }

  // este es mejor investigar sobre el
  // es lo ultimo que se ejecuta
  componentDidMount() {
    console.log('ComponentDidMount');
  }

  // este metodo solo se ejecuta cuando se actualiza un coponente
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevProps, prevState);
  }
}

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
        <Button chanchito='Feliz'/>
        <button
          className={`${this.state.className}`}
          onClick={() => this.setState({prop: 1})}>
          Enviar desde App
        </button>
      </div>
    );
  }
}

export default App;
