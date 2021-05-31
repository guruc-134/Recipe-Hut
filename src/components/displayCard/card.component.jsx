import React, { useState,useEffect } from 'react'

import './card.style.scss'
function Card({recipe}) {
    console.log('recipe',recipe)
    useEffect(() => {
        var summary = document.querySelectorAll('.summary')
        if (summary)
        {
            for(let i=0 ;i<summary.length;i++)
            {
                summary[i].innerHTML = recipe.summary;
            }
            }
    },[recipe])

    return (
        <div className='card'>
            <div className='card-1'>
            This is a card
            <h1>{recipe.title}</h1>
            <img src ={recipe.image}></img>
            <p className='summary'>
                {/* {recipe.summary} */}
            </p>
            </div>
            <div className='card-2'>

            {
                recipe.analyzedInstructions ? (recipe.analyzedInstructions.map((point) =>     <p className='point'> {point}</p>) ) : null
            }
            </div>
        </div>
    )
}

export default Card
