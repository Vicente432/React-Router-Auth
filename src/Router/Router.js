import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import RandomCocktail from "./pages/RandomCocktail";
import CategoryList from "./pages/CategoryList";
import CategoryDetails from "./pages/CategoryDetails";
import CocktailDetails from "./pages/CocktailDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/random", element: <RandomCocktail /> },
      { path: "/categories", element: <CategoryList /> },
      { path: "/categories/:category", element: <CategoryDetails /> },
      { path: "/categories/:category/cocktail/:id", element: <CocktailDetails /> },
      { path: "/cocktails/:id", element: <CocktailDetails /> },
    ],
  },
]);

export default router;
