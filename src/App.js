import Button from './Button.js'

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Button onClick={() => console.log('Hello World!')}>Enviar</Button>
    </div>
  );
}

export default App;
