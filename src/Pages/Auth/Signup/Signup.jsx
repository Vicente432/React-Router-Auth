import { useContext, useState } from "react";
import { signup } from "../../../Services/authService";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { UserContext } from "../../../Context/user";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleChangeFormData = ({ target }) => {
    const { name, value } = target;
    setFormData((previousValue) => ({ ...previousValue, [name]: value }));
  };
  const validatePassword = () => {
    return formData.password === confirmPassword ? true : false;
  };

  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      if (validatePassword()) {
        const response = await signup(formData);
        if (response) {
          console.log(formData);
          response;
          localStorage.setItem("token", response.data.token);
          setUser(formData.username);
          navigate("/profile");
        }
      } else {
        setError("The passwords do not match");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <section>
          <label>
            Username:
            <input
              type="text"
              name="username"
              onChange={handleChangeFormData}
            />
          </label>
          <label>
            Email:
            <input type="email" name="email" onChange={handleChangeFormData} />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={handleChangeFormData}
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        </section>
        {error && <p>{error}</p>}
        <section>
          <button type="submit">Sign up</button>
        </section>
      </form>
    </div>
  );
};

export default Signup;
