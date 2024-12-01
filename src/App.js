import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./main.css";


const App = () => (
  <div>
    <Navbar />
    <main>
      <Outlet />
    </main>
  </div>
);

export default App;
