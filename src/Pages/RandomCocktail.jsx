import { useEffect, useState } from "react";
import { getRandomCocktail } from "./services/cocktailService";
import CocktailShow from "./components/CocktailShow";

const RandomCocktail = () => {
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktail = async () => {
      const randomCocktail = await getRandomCocktail();
      setCocktail(randomCocktail);
    };
    fetchCocktail();
  }, []);

  return (
    <div>
      {cocktail ? <CocktailShow cocktail={cocktail} /> : <p>Loading...</p>}
    </div>
  );
};

export default RandomCocktail;
