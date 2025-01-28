
import './Form.css';


function Form () {

return (

    <div className='formLogin'>

    <form  method="get" id="form1">
    <label htmlFor="username"><b>Name:</b></label><br></br>
    <input type="text" name="username" required></input>

    <label htmlFor="email" ><b>Email:</b></label><br></br>
    <input type="email" name="email" required></input><br></br>

    <label htmlFor="psw" ><b>Password:</b></label><br></br>
    <input type="password" name="psw" required></input>

    </form>
    </div>

)

}

export default Form;