/* eslint-disable react/prop-types */
import "./Button.css";

function Button({size}) {
  return (
    <button className={`join-button ${size}`}>
      Join us
    </button>
  );
}


export default Button;
