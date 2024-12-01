
const CocktailShow = ({ cocktail }) => (
  <div className="cocktail-card">
    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
    <h3>{cocktail.strDrink}</h3>
    <p>{cocktail.strInstructions}</p>
  </div>
);

export default CocktailShow;
