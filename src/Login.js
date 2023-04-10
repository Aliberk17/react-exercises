import { useState } from "react";
import useForm from "./useForm";

function Login(props) {
  const [username, updateUsername, password, updatePassword] = useForm();
  const [remember, setRemember] = useState(false);

  const handleChanged = (event) => {
    if (event.target.name === "username") {
      updateUsername(event.target.value);
    } else if (event.target.name === "password") {
      updatePassword(event.target.value);
    } else if (event.target.name === "remember") {
      setRemember(!remember);
    }
  };

  const resetInputs = (event) => {
    event.preventDefault();
    updateUsername("");
    updatePassword("");
    setRemember(false);
  };

  return (
    <form>
      <label>username: </label>
      <input name="username" value={username} onChange={handleChanged} />
      <br />
      <label>password: </label>
      <input name="password" value={password} onChange={handleChanged} />
      <br />
      <label>remember: </label>
      <input
        name="remember"
        type="checkbox"
        checked={remember}
        onChange={handleChanged}
      />
      <br />
      <button
        disabled={username === "" && password === ""}
        onClick={(event) => {
          event.preventDefault();
          props.onLogin({ username, password, remember });
        }}
        className={
          password.length < 8 ? "loginInputInactive" : "loginInputActive"
        }
      >
        login
      </button>
      <button onClick={resetInputs}>reset</button>
    </form>
  );
}

export default Login;
