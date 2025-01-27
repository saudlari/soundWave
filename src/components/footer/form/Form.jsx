import Button from "../button/Button";

function Form () {

return (
<form className={styles.formLogin} method="get" id="form1">
<label for="username"><b>Name:</b></label>
<input type="text" name="username" required></input>

<label for="email"><b>Email:</b></label>
<input type="email" name="email" required></input>

<label for="psw"><b>Password:</b></label>
<input type="password" name="psw" required></input>


return (
    <Button />
)


</form>
)

}

export default Form;