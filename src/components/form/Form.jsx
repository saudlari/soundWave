
import './Form.css';


function Form () {

return (

    <div className='formLogin'>

    <form  method="post" id="form1">
    <label htmlFor="username"><b>Name:</b></label>
    <input type="text" name="username" required />

    <label htmlFor="email" ><b>Email:</b></label>
    <input type="email" name="email" required /><br />

    <label htmlFor="psw" ><b>Password:</b></label>
    <input type="password" name="psw" required />

    </form>
    </div>

)

}

export default Form;