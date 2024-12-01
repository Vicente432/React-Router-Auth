import axios from "axios";

const api = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
});

export const getRandomCocktail = async () => {
  const response = await api.get("random.php");
  return response.data.drinks[0];
};

export const getCategories = async () => {
  const response = await api.get("list.php?c=list");
  return response.data.drinks;
};

export const getCocktailsByCategory = async (category) => {
  const response = await api.get(`filter.php?c=${category}`);
  return response.data.drinks;
};

export const getCocktailDetails = async (id) => {
  const response = await api.get(`lookup.php?i=${id}`);
  return response.data.drinks[0];
};
