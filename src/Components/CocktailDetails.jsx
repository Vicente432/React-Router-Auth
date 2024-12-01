import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCocktailDetails } from "./services/cocktailService";
import CocktailShow from "./components/CocktailShow";

const CocktailDetails = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    const fetchCocktailDetails = async () => {
      const details = await getCocktailDetails(id);
      setCocktail(details);
    };
    fetchCocktailDetails();
  }, [id]);

  return (
    <div>
      {cocktail ? <CocktailShow cocktail={cocktail} /> : <p>Loading...</p>}
    </div>
  );
};

export default CocktailDetails;
