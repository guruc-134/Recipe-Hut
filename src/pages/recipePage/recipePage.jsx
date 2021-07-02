import React ,{useEffect, useState} from 'react'
import  {firestore} from '../../backend/firebase/firebase.utils';
import './recipePage.styles.scss';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Loader from '../../components/loader/loader.component';
const APIKEY = process.env.REACT_APP_API_KEY.split(" ")


function RecipePage(props) {
    const [recipe,setRecipe] = useState("")
    const extractDetails = () =>{
        console.log(props)
        console.log(props.match.params.recipeId)   
        const [docId,recipeId,index] = props.match.params.recipeId.split('-')
        return {'docId':docId,'recipeId':recipeId,'index':index}
    }
    const getRecipe = () =>{
        var {docId,recipeId,index} = extractDetails()
        var recipeObject = {}
        if(docId==='search'){
            // console.log(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?stepBreakdown=true&apiKey=${APIKEY[1]}`)
            axios.get(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?stepBreakdown=true&apiKey=${APIKEY[1]}`)
            .then(item=>{
                var grpobj =[]
               item.data[0].steps.map(result =>{
                    // console.log(result)
                    grpobj.push({ingredients:result.ingredients,step:result.step})
                })
                var image =`https://spoonacular.com/recipeImages/${recipeId}-312x231.jpg`;
                recipeObject= {grpObj:grpobj,image:image}
            })
            .catch(err=>console.log(err))
            //  summary 
            // console.log(`https://api.spoonacular.com/recipes/${recipeId}/summary?apiKey=${APIKEY[1]}`)
            axios.get(`https://api.spoonacular.com/recipes/${recipeId}/summary?apiKey=${APIKEY[1]}`)
            .then(resp =>{
                resp = resp.data
                recipeObject = {id:resp.id,title:resp.title,summary:resp.summary,...recipeObject}
                setRecipe(recipeObject)
            })
            // 
        }
        else{

            firestore.collection('home-PageRecipes').doc(docId).get()
            .then( response =>{
                setRecipe(response.data().recipeResults[index])
            })
        }

    }
    useEffect(()=>
    {
        var summary = document.querySelector('.summary')
        if(summary) summary.innerHTML = recipe.summary
    },[recipe])
    useEffect(()=>{
        getRecipe()
    },[])
    return (
        <div className='recipePage'>
            <div className ='back-btn'> 
            <Link to="/recipe"><i className="fa fa-arrow-circle-left" aria-hidden="true"></i></Link>
            </div>
            {
            recipe?
            <div>
                <div className='headerDiv'>
                <h1>{recipe.title}</h1>
                <img src = {recipe.image} alt='recipeImg'></img>
                </div>

                <div>
                    <h3>Recipe Summary</h3>
                    <p className='summary'>{recipe.summary}</p>
                </div>
                <h3> Recipe</h3>
                <div className='recipe'>
                    {recipe.grpObj?
                    recipe.grpObj.map(item=>{
                        return (
                        <div className='steps'>
                            <h4>
                                <i className="fas fa-utensils"></i>
                                Ingredients and Steps
                            </h4>
                                {
                                    item.ingredients.map( ingr =>(
                                        <span>{ingr.name}</span>
                                    ) )
                                }
                            <p>{item.step}</p>
                            <hr></hr>
                        </div>
                        ) 
                    }):<Loader/>
                    }
                </div>
            </div>
            :(
            <setup_svg className='setup-svg'/>)
            }
        </div>
    )
}

export default RecipePage
