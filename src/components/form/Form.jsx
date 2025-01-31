
import './Form.css';
import Button from "../../components/button/Button"


function Form () {

return (
<>
    <div className='formLogin'>

    <form  method="post" id="form1">
    <label htmlFor="username"><b>Name:</b></label>
    <input type="text" id="username" required />

    <label htmlFor="email" ><b>Email:</b></label>
    <input type="email" id="email" required />

    <label htmlFor="psw" ><b>Password:</b></label>
    <input type="password" id="psw" required />

    <Button size="big" type={SubmitEvent} />
    </form>
    
    </div>
    </>
)

}

export default Form;