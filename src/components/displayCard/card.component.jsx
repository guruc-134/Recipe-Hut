import React, { useState,useEffect, useContext} from 'react'
import {firestore} from '../../backend/firebase/firebase.utils'
import './card.style.scss'
import { UserContext } from '../../context/userContext';

function Card({recipe,fromFavs}) {
    const currentUser  = useContext(UserContext)
    const [recipeLiked, setRecipeLiked]  = useState(false)
    
 const addFav = () =>{
        const pushedAt = Date()
        firestore.collection(`/users/${currentUser.id}/favourites`).add({pushedAt, ...recipe})
        setRecipeLiked(true)

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
    const recipeLikedToggle = () =>
    {

        setRecipeLiked( (previous) =>!previous)
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
    },[])

    return (
        <div className='card'>
            <div className='card-1'>
                {
                !fromFavs?(!recipeLiked?<button className = 'fav-recipe' onClick={addFav}>
                <img src="https://img.icons8.com/fluent/48/000000/like.png"/>
                </button>:<button className = 'fav-recipe' >
                <img src="https://img.icons8.com/fluent/96/000000/like.png"/>
                </button>):<p onClick ={removeFav}> remove from favourites</p>
                }

                <h1>{recipe.title}</h1>
                <img src ={recipe.image}></img>
                <p className='summary'>
                    {/* {recipe.summary} */}
                </p>
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
                                    {/* <p className ="card-2-steps-equipment">
                                    {
                                        item.equipment.map((util) => <span key={`${recipe.id}+${index}+equip-${util.id}-${util.name}`}> {util.name}</span>)
                                    }
                                </p> */}
                                <p className ="card-2-steps-step">{item.step}</p>
                                </div>)
                            })) : ( console.log(recipe))
                            
                }
            </div>
        </div>
    )
}

export default Card


