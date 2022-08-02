import React from 'react';
import './RecipeTile.css';

export default function ({recipe}) {
  return (
    <div className="recipeTile" onClick={() => {
        window.open(recipe["recipe"]["url"]);
    }}>
        <img className="recipeTile__img" src={recipe["recipe"]["image"]} alt="recipe"/>
        <p className='recipeTile__name'>{recipe["recipe"]["label"]}</p>
    </div>
  )
}
