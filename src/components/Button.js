import { Component } from 'react';

const styles = {
  button: {
    backgroundColor: '#0A283B',
    color: '#fff',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
}

// Boton que recibe todas las prppiedades que se le pasen
class Button extends Component {
  render() {
    return (
      <button style={styles.button} {...this.props}/>
    );
  }
}

export default Button;
