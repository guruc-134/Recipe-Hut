import React ,{useEffect, useState} from 'react'
import  {firestore} from '../../backend/firebase/firebase.utils';
import './recipePage.styles.scss';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Loader from '../../components/loader/loader.component';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
const APIKEY = process.env.REACT_APP_API_KEY.split(" ")
const APIKEY_USE = APIKEY[Math.floor(8*Math.random())]

function RecipePage(props) {
    const [recipe,setRecipe] = useState("")
    const extractDetails = () =>{
        const [docId,recipeId,index] = props.match.params.recipeId.split('-')
        return {'docId':docId,'recipeId':recipeId,'index':index}
    }
    const getRecipe = () =>{
        var {docId,recipeId,index} = extractDetails()
        var recipeObject = {}
        if(docId==='search'){
            axios.get(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?stepBreakdown=true&apiKey=${APIKEY_USE}`)
            .then(item=>{
                var grpobj =[]
               item.data[0].steps.forEach(result =>{
                    // console.log(result)
                    grpobj.push({ingredients:result.ingredients,step:result.step})
                })
                var image =`https://spoonacular.com/recipeImages/${recipeId}-312x231.jpg`;
                recipeObject= {grpObj:grpobj,image:image}
            })
            .catch((err)=>{
                console.log(err)
                toast.warning("your request could not be fetched", 
                {position: toast.POSITION.BOTTOM_LEFT})
            }
                )
            //  summary 
            axios.get(`https://api.spoonacular.com/recipes/${recipeId}/summary?apiKey=${APIKEY_USE}`)
            .then(resp =>{
                resp = resp.data
                recipeObject = {id:resp.id,title:resp.title,summary:resp.summary,...recipeObject}
                setRecipe(recipeObject)
            })
            .catch((err)=>{
                console.log(err)
                toast.warning("your request could not be fetched", 
                {position: toast.POSITION.BOTTOM_LEFT})
            }
                )
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                <img src = {recipe.image} alt='recipeImg' width="200"></img>
                </div>

                <div>
                    <h3>Recipe Summary</h3>
                    <p className='summary'>{recipe.summary}</p>
                </div>
                <h3> Recipe</h3>
                <div className='recipe'>
                    {recipe.grpObj?
                    recipe.grpObj.map((item,index)=>{
                        return (
                        <div className='steps' key={`${recipe.id}-steps-${index}`}>
                            <h4>
                                <i className="fas fa-utensils"></i>
                                Ingredients and Steps
                            </h4>
                                {
                                    item.ingredients.map( (ingr,ind) =>(
                                        <span
                                        key={`${recipe.id}-ingr-${ind}`}
                                        >{ingr.name}</span>
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
            :(<Loader/>)
                }
        </div>
    )
}

export default RecipePage
