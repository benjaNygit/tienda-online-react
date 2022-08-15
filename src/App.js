import Button from './Button.js'

const arr = [
  'Hello World! - 1',
  'Hello World! - 2',
  'Hello World! - 3',
]

const App = () => {
  // si no ponemos key, nos arrojara error la consola del navegador
  return (
    <div>
      <h1>Hello World!</h1>
      {arr.map(el => <p key={el}>{el}</p>)}
      <Button onClick={() => console.log('Hello World!')}>Enviar</Button>
    </div>
  );
}

export default App;
