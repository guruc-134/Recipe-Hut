import React, { useState,useEffect } from 'react'
import Card from '../../components/displayCard/card.component';
import News from '../../components/interview/news.component';
import RecipeFinder from '../../components/recipeFinder/recipe-finder.component'
function SearchPage() {
    const [recipe, setRecipe] = useState([]);
    return (
        <div className='search'>
            {/* <div className='recipe-container'>
                <RecipeFinder recipe={recipe}
                setRecipe={setRecipe}
                />
                <div className='recipe-cards'>
                {
                    recipe.map((item) =>
                    <Card key = {item.id} recipe = {item}/>
                    )
                }
                </div>
            </div> */}
            all the searches are done here

            {/* <News/>             */}
        </div>
    )
}

export default SearchPage
