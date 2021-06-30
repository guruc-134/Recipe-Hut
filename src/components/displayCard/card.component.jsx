import React, { useState,useEffect, useContext} from 'react'
import {firestore} from '../../backend/firebase/firebase.utils'
import './card.style.scss'
import { UserContext } from '../../context/userContext';
import {Link} from 'react-router-dom'
import ReactTooltip from "react-tooltip";


function Card({recipe,from,fromFavs,docId='search', index='rEciPeIndso0134'}) {
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
        <div className='card'>
            <div className='card-1'>
                {/* {console.log('this is a recipe obj',recipe,docId,recipe.id)} */}
                <div>
                    <img className = 'recipe-image' alt='recipe-logo' src ={recipe.image}></img>
                </div>
            </div>
            <div className='card-2'>
                <h1>{recipe.title}</h1>
            <p className='summary'>
                {/* {recipe.summary} */}
            </p>
            <Link className='expand-recipe'
                    to={
                        {
                            pathname:`/${from}/${docId}-${recipe.id}-${index}`,
                            recipe:{...recipe}
                        }
                    }>
                    read more ...
                </Link>
            </div>
            <div className='card-buttons' data-tip data-for={`fav-${docId}-${index}`}>
                { currentUser?(

                    !fromFavs?(
                        !recipeLiked?
                        <button className = 'fav-recipe' onClick={addFav}>
                            <i className="fa fa-heart small" aria-hidden="true"></i>
                        </button>
                        :<button className = 'fav-recipe' >
                            <i className="fa fa-heart large" aria-hidden="true"></i>
                        </button>)
                        :<p onClick ={removeFav}> <i className="far fa-trash-alt"></i></p>
                    ) : null }
            <ReactTooltip id={ `fav-${docId}-${index}`} place="bottom" effect="float" >
                add to favourites
            </ReactTooltip>
            </div>


            {/*  tool tips */}
        </div>
    )
}

export default Card


