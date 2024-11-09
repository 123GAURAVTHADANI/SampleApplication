import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate(null);

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      // submit
      localStorage.setItem("token", "123");
      navigate("/");
    } else {
      alert("Please provide the valid input!!!");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={(event) => handleSubmitEvent(event)}>
      <input
        name="username"
        placeholder="username"
        onChange={(event) => handleInput(event)}
      />
      <input
        name="password"
        placeholder="password"
        onChange={(event) => handleInput(event)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;
