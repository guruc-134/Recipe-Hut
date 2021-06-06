import React, { useState,useEffect } from 'react'
import Bot from '../../components/bot/bot.component';
import Card from '../../components/displayCard/card.component'
import './homePage.style.scss'
import Chef  from '../../components/chef/chef.component.jsx'
import  {firestore} from '../../backend/firebase/firebase.utils';
// import axios from 'axios'
// import '../../backend/spoonacular/recipes'
const HomePage = () => {
    const [homeRecipes,setHomeRecipes] = useState([])
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
      }
    const getRecipesFromFireStore = (index) =>
    {
        var array = []
        firestore.collection('home-PageRecipes').get()
            .then( snapShot =>
            {
               var  doc = snapShot.docs[index]
                    var dd = doc.data()
                    array.push(dd.recipeResults)
                    console.log(array.length)
                    setHomeRecipes(shuffle(array[array.length-1]))
                
            })
            .catch(error => console.log('error fetching the data from firebase',error))
    }
    useEffect(() => {
        getRecipesFromFireStore(0);
    }, [])
    return (
        <div className='home-page'>
            <h1> Home Page</h1>
            <Chef/>
            <div className='recipe-cards'>
            {
                homeRecipes?
                homeRecipes.map((item) => {
                    return(
                        item.found?
                <Card key = {item.id} recipe = {item}/>:null)
                }) : null
            } 
            </div>
            <Bot/> 

        </div>
    )
}

export default HomePage
