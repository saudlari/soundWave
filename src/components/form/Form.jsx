
import './Form.css';


function Form () {

return (
<>
    <div className='formLogin'>

    <form  method="post" id="form1">
    <label htmlFor="username"><b>Name:</b></label>
    <input type="text" id="username" autocomplete required />

    <label htmlFor="email" ><b>Email:</b></label>
    <input type="email" id="email" required />

    <label htmlFor="psw" ><b>Password:</b></label>
    <input type="password" id="psw" required />

    </form>
    </div>
    </>
)

}

export default Form;