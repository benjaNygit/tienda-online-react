import { Component } from 'react';

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: '/img-productos/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img: '/img-productos/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img: '/img-productos/lechuga.jpg'},
    ]
  }

  render() {
    return (
      <div>Hello World!</div>
    );
  }
}



export default App;
