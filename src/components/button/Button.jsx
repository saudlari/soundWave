/* eslint-disable react/prop-types */
import "./Button.css";

function Button({size}) {
  return (
    <button className={`join-button ${size}`}>
      <a href="./join">Join us</a>
    </button>
  );
}


export default Button;
