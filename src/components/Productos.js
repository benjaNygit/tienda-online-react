import { Component } from 'react';
import Producto from './Producto.js';

class Productos extends Component {
  render() {
    const { productos, agregarAlCarro } = this.props;

    // Usar Producto como tantos productos alla
    return (
      <div>
        {productos.map(producto =>
        <Producto
          agregarAlCarro={agregarAlCarro}
          key={producto.name}
          producto={producto}
        />)}
      </div>
    );
  }
}

export default Productos;
