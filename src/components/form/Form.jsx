import "./Form.css";
import Button from "../../components/button/Button";
import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (dataForm) => {
    event.preventDefault();
    console.log(dataForm);
  };

  return (
    <>
      <div className="formLogin">
        <form
          onSubmit={handleSubmit(onSubmit)}
          method="post"
          id="form1"
          noValidate
        >
          <label htmlFor="username">
            <b>Name:</b>
          </label>
          <input
            type="text"
            {...register("username", {
              required: true,
              pattern: /^[a-zA-Z0-9_]{3,20}$/,
            })}
            id="username"
          />
          {errors.username && <p>Username is required and must be valid</p>}

          <label htmlFor="email">
            <b>Email:</b>
          </label>
          <input
            type="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            id="email"
          />
          {errors.email && <p>Email is required and must be valid</p>}

          <label htmlFor="psw">
            <b>Password:</b>
          </label>
          <input
            type="password"
            {...register("password", { required: true })}
            id="psw"
          />
          {errors.password && <p>Password is required</p>}

          <Button size="big" type="submit" />
        </form>
      </div>
    </>
  );
}

export default Form;
