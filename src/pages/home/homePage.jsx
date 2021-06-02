import React, { useState,useEffect } from 'react'
import Bot from '../../components/bot/bot.component';
import Card from '../../components/displayCard/card.component'
import './homePage.style.scss'
import Chef  from '../../components/chef/chef.component.jsx'
const HomePage = () => {
    const [facts, setFacts] = useState('')
    const [homeRecipes,setHomeRecipes] = useState([])
    return (
        <div className='home-page'>
            <h1> Home Page</h1>
            <Chef/>
                <div className='recipe-cards'>
                {
                    homeRecipes.map((item) =>
                    <Card key = {item.id} recipe = {item}/>
                    )
                }
                </div>
            <Bot
                facts={facts}
                setFacts={setFacts}
            /> 

        </div>
    )
}

export default HomePage
