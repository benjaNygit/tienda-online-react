import './Button.css'

const Button = (props) => {
  return (
    // se le pasan todas las propiedades
    <button {...props} className='btn'/>
  )
}

export default Button;
