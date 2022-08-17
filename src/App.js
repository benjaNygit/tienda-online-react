import { Component } from 'react';
import Productos from './components/Productos.js';
import Layout from './components/Layout.js';

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
      <Layout>
        <Productos 
          agregarAlCarro={() => console.log('Metodo Agregar al carro.')}
          productos={this.state.productos}
        />
      </Layout>
    );
  }
}



export default App;
