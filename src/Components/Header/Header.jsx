import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useContext } from "react";
import { UserContext } from "../../Context/user";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div id="headerWrapper">
      <Link to="/">
        <h2> WISE-C APP </h2>
      </Link>
      <section>
        <Link to="/About">
          <h3>About</h3>
        </Link>
        {!localStorage.getItem("token") && (
          <>
            <Link to="/auth/signup">
              <h3>Signup</h3>
            </Link>
            <Link to="/auth/login">
              <h3>Login</h3>
            </Link>
          </>
        )}

        {localStorage.getItem("token") && (
          <>
            <h3>{user}</h3>
            <button onClick={logout}>
              <h3>Logout</h3>
            </button>
          </>
        )}
      </section>
    </div>
  );
};

export default Header;
