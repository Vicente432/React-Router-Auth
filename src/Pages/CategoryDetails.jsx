import { useEffect, useState } from "react";
import { getCategories } from "./services/cocktailService";
import { Link } from "react-router-dom";


const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getCategories();
      setCategories(categoryList);
    };
    fetchCategories();
  }, []);

  return (
    <div className="category-list">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.strCategory}>
            <Link to={`/categories/${category.strCategory}`}>
              {category.strCategory}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
