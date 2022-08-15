import Button from './Button.js'

const App = () => {
  const condicion = true;

  if (condicion) {
    return (
      <p>La condición es verdadera!</p>
    )
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <Button onClick={() => console.log('Hello World!')}>Enviar</Button>
    </div>
  );
}

export default App;
