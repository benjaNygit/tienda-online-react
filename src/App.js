import logo from './logo.svg';
import './App.css';

// inline style
const estilo = {
  backgroundColor: '#456',
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
}

// inline style con funcion
const estilo1 = (bg='#456') => ({
  backgroundColor: bg,
  color: '#fff',
  padding: '10px 15px',
  margin: '10px 15px',
})

// convinando estilos
const compuesto = {
  boxShadow: '0 5px 3px rgba(0,0,0,0.5)',
}

const App = () => {
  return (
    //<p style={estilo}>Hello World!</p>
    //<p style={estilo1('#333')}>Hello World!</p>
    <p style={{...estilo1('#333'), ...compuesto}}>Hello World!</p>
  );
}

export default App;
