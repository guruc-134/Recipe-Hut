import React, { useState,useEffect } from 'react'
import Bot from '../../components/bot/bot.component';
import Card from '../../components/displayCard/card.component';
import RecipeFinder from '../../components/recipeFinder/recipe-finder.component'
import './homePage.style.scss'
import VideoFinder from '../../components/videoFinder/video-finder.component';
import Chef  from '../../components/chef/chef.component.jsx'
const HomePage = () => {
    const [recipe, setRecipe] = useState([]);
    const [jokes, setjokes] = useState('this is a joke')
    return (
        <div className='home-page'>
            <h1> Home Page</h1>
            <Chef/>
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
            </div>
            <div className='video-container'>
                <VideoFinder/>
            </div>
            */
        }
            {/* <Bot
                jokes={jokes}
                setjokes={setjokes}
            />  */}

        </div>
    )
}

export default HomePage
