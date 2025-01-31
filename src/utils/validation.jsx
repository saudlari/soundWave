import { useState } from 'react';
import Button from '../components/button/Button';

function MyForm() {
  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(null);

function Validateform() {
  const error = {};

  if (FormData.username.length <3){
    error.username = 'the name must be a least 3 characters'
  }

  if (!/^[\w-\.]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(FormData.email)) {
    error.mail = 'Invalid email';
}

 if(!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(FormData.psw)) {
    error.psw = 'The password must be between 8 and 16 characters long, with at least one digit, at least one lowercase letter, and at least one uppercase letter.';
}

}
    
}



  /*function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);

    if (value.length < 5) {
      setInputError('Input must be at least 5 characters');
    } else {
      setInputError(null);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (inputValue.length >= 5) {
      // submit form
    } else {
      setInputError('Input must be at least 5 characters');
    }
  }*/

  