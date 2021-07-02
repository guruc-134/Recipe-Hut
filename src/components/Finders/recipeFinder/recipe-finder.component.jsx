import React, { useState, useContext} from 'react'
import './recipe-finder.style.scss'
import {firestore} from '../../../backend/firebase/firebase.utils'
import axios from 'axios'
import { UserContext } from '../../../context/userContext';

const APIKEY = process.env.REACT_APP_API_KEY.split(" ")


function RecipeFinder({setRecipe,setIsVideo}){
    const [query,setQuery] = useState('')
    const user = useContext(UserContext)
    const [number,setNumber] = useState(30)
    const baseUrl = 'https://api.spoonacular.com';
    // setNumber(10)
    // inputs 
    const handleInputChange = (e)=>
    {
        setQuery(e.target.value)
        e.target.value = ""
    }
    const obtainDate = (date) =>{
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        date = `${dd}-${mm}-${yyyy}`
        return date
    }
    const handleRecipes = (responseObjects)=>
    {
        // console.log('handle Recipes input ---',responseObjects)
        var recipeResults = []
        responseObjects.map((object) =>
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
                    recipeObject ={...recipeObject,ingredients,equipment,steps}
                }
                else if(object.analyzedInstructions[0])
                {
                    var grpObj = object.analyzedInstructions[0].steps.map(
                        (item) =>
                        {
                            var  {step,ingredients} = item
                            return (
                                {step,ingredients}
                                )
                            }
                            )
                        recipeObject = {...recipeObject,grpObj}
                }
                // console.log('recipe object',recipeObject)
                recipeResults.push(recipeObject)
            })
            if(recipeResults.length === 0)
            {
                recipeResults = [{title:'we could not find any results for this query',found:false}]
                // console.log(recipeResults)
            }
            setRecipe(recipeResults)
            setIsVideo(false)
    }

    //  API calling
    const findRecipes = (e) =>
    {
        e.preventDefault();
        if(user){
            const searchedOn = obtainDate(new Date())
            const timeStamp = new Date()
            firestore.collection(`/users/${user.id}/searchHistory`).add({timeStamp:timeStamp,query:query,searchedOn:searchedOn,icon:"ri-input-method-fill"})
        }
        // console.log(`${baseUrl}/recipes/complexSearch?query=${query}&addRecipeInformation=true&apiKey=${APIKEY[0]}&number=${number}`)
        axios.get(`${baseUrl}/recipes/complexSearch?query=${query}&addRecipeInformation=true&apiKey=${APIKEY[0]}&number=${number}`)
        .then((response) =>
        {
            if(response.data.results)
            { 
                handleRecipes(response.data.results)
            }
        })
        .catch((err)=>console.log(err))
    };
    return (
        <div className='recipe-finder'>
            <div className='recipe-finder-type-1'>

            <h2> Search for recipes by name</h2>
            <form className= 'form'>
                
                <input onChange={handleInputChange} 
                className='form-input' 
                placeholder='enter the name of the dish'
                value = {query}></input>
            <button className = 'form-btn' onClick={findRecipes}>
            <i class="fas fa-search"></i>
            </button>
            </form>
        </div>
    </div>
    )
}

export default RecipeFinder
/*
const baseUrl = 'https://api.spoonacular.com';
----------------------------------
search recipe by ingredients

{{baseUrl}}/recipes/findByIngredients?ingredients=<string>&number=<number>&limitLicense=<boolean>&ranking=<number>&ignorePantry=<boolean>


ingredients = (Required) A comma-separated list of ingredients that the recipes should contain.

number  = The maximum number of recipes to return (between 1 and 100). Defaults to 10.
-----------------------
search recipe 

example search 
https://api.spoonacular.com/recipes/complexSearch?query=creamy pasta recipe&addRecipeInformation=true&apiKey=8ab5fa53ef8f45d3a3d5c00e6966c9a3&diets=vegetarian&number=2


query  = (Required) The (natural language) recipe search query.
cusine = The cuisine(s) of the recipes. One or more, comma separated (will be interpreted as 'OR'). See a full list of supported cuisines.


includeIngredients = A comma-separated list of ingredients that should/must be used in the recipes.

diets = 
Diet Definitions
Every API endpoint asking for an diet parameter can be fed with any of these diets.

Gluten Free
Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).

Ketogenic
The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not.

Vegetarian
No ingredients may contain meat or meat by-products, such as bones or gelatin.

Lacto-Vegetarian
All ingredients must be vegetarian and none of the ingredients can be or contain egg.

Ovo-Vegetarian
All ingredients must be vegetarian and none of the ingredients can be or contain dairy.

Vegan
No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.

Pescetarian
Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.

paleo
Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.

Primal
Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.

Whole30
Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.



type= 

Every API endpoint asking for a type parameter can be fed with any of these meal types.

main course
side dish
dessert
appetizer
salad


addRecipeInformation = 	
If set to true, you get more information about the recipes returned.

------------------------------

Random recipes
https://api.spoonacular.com/recipes/random?number=1&tags=vegetarian,dessert



food videos 
https://api.spoonacular.com/food/videos/search?query=pasta&number=2


----------------
random food joke 
https://api.spoonacular.com/food/jokes/random



ask chef

https://api.spoonacular.com/recipes/quickAnswer
https://spoonacular.com/food-api/docs#Quick-Answer
--------
recipe Card

https://spoonacular.com/food-api/docs#Create-Recipe-Card

*/