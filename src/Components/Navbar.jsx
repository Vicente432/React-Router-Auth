import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <h1>
      <Link to="/">Reboot Cocktails</Link>
    </h1>
    <ul>
      <li>
        <Link to="/random">Random</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
