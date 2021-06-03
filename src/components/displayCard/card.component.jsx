import React, { useState,useEffect } from 'react'

import './card.style.scss'
function Card({recipe}) {
    // console.log('recipe',recipe)
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
                <h1>{recipe.title}</h1>
                <img src ={recipe.image}></img>
                <p className='summary'>
                    {/* {recipe.summary} */}
                </p>
            </div>
            <div className='card-2'>
                {
                    recipe.grpObj.map((item,index) =>
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
                        })
                }
            </div>
        </div>
    )
}

export default Card
