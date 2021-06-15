import React, { useState,useEffect } from 'react'
import Card from '../../components/displayCard/card.component';
import RecipeByIngredient from '../../components/Finders/recipeByIngredent-finder/recipeByIngredient.component';
import RecipeFinder from '../../components/Finders/recipeFinder/recipe-finder.component'
import './search-page.style.scss';
function SearchPage() {
    const [recipe, setRecipe] = useState([]);
    return (
        <div className='search'>
            <div className='recipe-container'>
                <RecipeFinder recipe={recipe}
                setRecipe={setRecipe}
                />
                {/* <RecipeByIngredient recipe={recipe}
                setRecipe={setRecipe}/> */}
                <div className='recipe-cards'>
                {
                    recipe.map((item) =>
                    item.found?
                    (<Card key = {item.id} recipe = {item}/>):null
                    )
                }
                </div>
            </div>
            all the searches are done here
        </div>
    )
}
export default SearchPage
