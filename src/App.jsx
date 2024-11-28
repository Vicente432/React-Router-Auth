import { RouterProvider } from "react-router-dom";
import router from "./Router";
import "./App.css";
import { UserContext } from "./Context/user";
import { useContext, useState } from "react";

function App() {
  const defaultUser = useContext(UserContext);
  const [user, setUser] = useState(defaultUser);
  const contextObj = { user, setUser };
  return (
    <>
      <UserContext.Provider value={contextObj}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </>
  );
}

export default App;
