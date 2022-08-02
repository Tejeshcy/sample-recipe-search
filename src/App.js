import "./App.css";
import "./key";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");

  const YOUR_APP_ID = "ba92b4dc";

  const YOUR_APP_KEY = "fd0b68ea151829fcf9a80f0fd3fdd3c6";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1> Food Recipe Plaza </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="Enter Ingridient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
        <select className="app__healthLabels">
          <option onClick={(e) => sethealthLabels("vegan")}>vegan</option>
          <option onClick={(e) => sethealthLabels("vegitarian")}>
            vegitarian
          </option>
          <option onClick={(e) => sethealthLabels("paleo")}>paleo</option>
          <option onClick={(e) => sethealthLabels("dairy-free")}>
            dairy-free
          </option>
          <option onClick={(e) => sethealthLabels("gluten-free")}>
            gluten-free
          </option>
          <option onClick={(e) => sethealthLabels("wheat-free")}>
            wheat-free
          </option>
          <option onClick={(e) => sethealthLabels("low-sugar")}>
            low sugar
          </option>
          <option onClick={(e) => sethealthLabels("egg-free")}>egg-free</option>
          <option onClick={(e) => sethealthLabels("peanut-free")}>
            peanut-free
          </option>
          <option onClick={(e) => sethealthLabels("tree-nut-free")}>
            tree-nut-free
          </option>
          <option onClick={(e) => sethealthLabels("soy-free")}>soy-free</option>
          <option onClick={(e) => sethealthLabels("fish-free")}>
            fish-free
          </option>
          <option onClick={(e) => sethealthLabels("shell-fish-free")}>
            shell-fish-free
          </option>
        </select>
      </form>

      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
