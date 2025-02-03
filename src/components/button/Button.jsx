/* eslint-disable react/prop-types */
import "./Button.css";

function Button({ size, onClick, type= "button" }) {
  return (
  
     <button className={`join-button ${size}`} onClick={onClick} type={type} >Join Now</button>

);
}

export default Button;
