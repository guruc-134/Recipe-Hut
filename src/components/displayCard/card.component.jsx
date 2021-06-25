import React, { useState,useEffect, useContext} from 'react'
import {firestore} from '../../backend/firebase/firebase.utils'
import './card.style.scss'
import { UserContext } from '../../context/userContext';
import {Link} from 'react-router-dom'
import RecipePage from '../../pages/recipePage/recipePage';

function Card({recipe,fromFavs,docId='search', index='rEciPeIndso0134'}) {
    const currentUser  = useContext(UserContext)
    const [recipeLiked, setRecipeLiked]  = useState(false)
    
    const addFav = () =>{
        if (!currentUser)
        {
            console.log(' You need to login to add things to your favorites')
        }
        else
        {const pushedAt = Date()
        firestore.collection(`/users/${currentUser.id}/favourites`).add({pushedAt, ...recipe})
        setRecipeLiked(true)}

    }
    const removeFav = () =>
    {
        console.log('recipe un faved')
        setRecipeLiked(false);
        firestore.doc(`/users/${currentUser.id}/favourites/${recipe.itemStoreid}`).delete()
        .then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    useEffect(() => {
        var summary = document.querySelectorAll('.summary')
        if (summary)
        {
            for(let i=0 ;i<summary.length;i++)
            {
                summary[i].innerHTML = recipe.summary;
            }
            }
    },[recipe.summary ])

    return (
        // add a read out summary button which uses speech synthesis to 
        // read the recipe summary present in the card
        // <div>
        //     <RecipePage recipe={recipe} docId={docId}></RecipePage>
        // </div>
        <div className='card'>
            <div className='card-1'>
                <div>
            <Link 
            to={
                {
                pathname:`/recipe/${docId}-${recipe.id}-${index}`,
                recipe:{...recipe}
                }
                }
            > see full sreen</Link>

                {console.log('this is a recipe obj',recipe,docId,recipe.id)}
                { currentUser?(
                        !fromFavs?(!recipeLiked?<button className = 'fav-recipe' onClick={addFav}>
                    <img alt='like' src="https://img.icons8.com/fluent/48/000000/like.png"/>
                    </button>:<button className = 'fav-recipe' >
                    <img alt='like' src="https://img.icons8.com/fluent/96/000000/like.png"/>
                    </button>):<p onClick ={removeFav}> remove from favourites</p>
                    ) : null }

                    <h1>{recipe.title}</h1>
                <img className = 'recipe-image' alt='recipe-logo' src ={recipe.image}></img>
                </div>
                <div>
                <p className='summary'>
                    {/* {recipe.summary} */}
                </p>
                </div>
            </div>
            <div className='card-2'>
               { recipe.grpObj ?
                (recipe.grpObj.map((item,index) =>
                {
                    return(
                        <div className ="card-2-steps" key={`${recipe.id}+${index}`} >
                        { item.ingredients.length>0?
                            (<div>
                                <h4> Ingredients:</h4>
                                <p className ="card-2-steps-ingr">
                                    {
                                        item.ingredients.map((ing) =><span key={`${recipe.id}+${index}+ingr-${ing.id}-${ing.name}`}>{ing.name}</span>)
                                    }
                                    </p>
                                    </div>
                                    ): null}
                                <p className ="card-2-steps-step">{item.step}</p>
                                </div>)
                            })) : ( console.log(recipe))
                            
                }
            </div>
        </div>
    )
}

export default Card


