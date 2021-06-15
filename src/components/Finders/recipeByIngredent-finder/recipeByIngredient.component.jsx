import React, { useState} from 'react'
import './recipeByIngredient.style.scss'
import axios from 'axios'
const APIKEY = ['8ab5fa53ef8f45d3a3d5c00e6966c9a3',
'cc548ac21e2642999689cdff7acb3468',
'8e743479e9f9467795afffbb26844379',
'c7a232f614b84f2bb1df4d3d7a3bc567',
'4a5b12ec6f3d4159b4b160e8808f4601',
'9a0f78a9a9fb4e1ba5857d871f42f1a8']

function RecipeByIngredient({setRecipe}) {
    const [ingredients,setIngredients] = useState('')
    const [number,setNumber] = useState(10)
    // setNumber(10)
    const baseUrl = 'https://api.spoonacular.com';
    const handleInputChange = (e)=>
    {
        setIngredients(e.target.value)
        e.target.value = ""
    }
    const handleRecipes = (responseObjects)=>
    {
        console.log('handle Recipes input ---',responseObjects)
        var recipeResults = []
        var store = responseObjects.map((object) =>
            {
                var recipeObject = {
                    id:object.id,
                    image:object.image,
                    title:object.title,
                    summary:object.summary,
                    found:true
                }
                var steps = []
                var ingredients = []
                var equipment = []
                if(object.analyzedInstructions.length === 0)
                {
                    recipeObject.found = false;
                    steps=['Steps are currently unavailable for this dish']
                    ingredients = [' ']
                    equipment = [" "]
                    recipeObject ={...recipeObject,ingredients,equipment,steps}
                }
                else if(object.analyzedInstructions[0])
                {
                    var grpObj = object.analyzedInstructions[0].steps.map(
                        (item) =>
                        {
                            var  {step,ingredients,equipments} = item
                            return (
                                {step,ingredients,equipments}
                                )
                            }
                            )
                        recipeObject = {...recipeObject,grpObj}
                }
                console.log('recipe object',recipeObject)
                recipeResults.push(recipeObject)
                return 'recipes fetched and store'
            })
            console.log(store)
            if(recipeResults.length === 0)
            {
                recipeResults = [{title:'we could not find any results for this query',found:false}]
                console.log(recipeResults)
            }
            setRecipe(recipeResults)
    }
    //  API calling
    const findRecipes = (e) =>
    {
        e.preventDefault();
        var ings = ingredients.split(',')
        var ingredientsQuery = ings.map( item => item.trim()).join(',+')
        console.log(`${baseUrl}/recipes/findByIngredients?ingredients=${ingredientsQuery}&number=${number}&apiKey=${APIKEY[0]}`)
        axios.get(`${baseUrl}/recipes/findByIngredients?ingredients=${ingredientsQuery}&number=${number}&apiKey=${APIKEY[0]}`)
        .then((response) =>
        {
            console.log(response)
            if(response.data.results)
            { 
                handleRecipes(response.data.results)
            }
        })
        .catch((err) => console.log(err))
    };
    return (
        <div className='recipeByIngredient'>
            <div className='recipeByIngredient-type-1'>

            <h2> Search for recipes by ingredients</h2>
            <form className= 'form'>
                
                <input onChange={handleInputChange} 
                className='form-input' 
                placeholder='enter ingredients'
                 value = {ingredients}></input>
            <button className = 'form-btn' onClick={findRecipes}>
                search
            </button>
            </form>
        </div>
    </div>
    )
}
  
export default RecipeByIngredient
