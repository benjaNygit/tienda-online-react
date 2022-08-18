import { Component } from 'react';
import Productos from './components/Productos.js';
import Layout from './components/Layout.js';
import Title from './components/Title.js';
import Navbar from './components/Navbar.js';

class App extends Component {
  state = {
    productos: [
      {name: 'Tomate', price: 1500, img: '/img-productos/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img: '/img-productos/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img: '/img-productos/lechuga.jpg'},
    ],
    carro: [
      // {name: 'Tomate', price: 1500, img: '/img-productos/tomate.jpg'}
    ],
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    // busca si hay dos productos con === nombre
    if (carro.find(x => x.name === producto.name)) {
      // para el producto que cumple, se le suma 1 a cantidad
      const newCarro = carro.map(
        x => x.name === producto.name ? ({...x, cantidad: x.cantidad+1}) : x
      );
      return this.setState({ carro: newCarro });
    }

    // a la estructura de producto existente se le concatena cantidad
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  }

  render() {
    console.log(this.state.carro);

    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
