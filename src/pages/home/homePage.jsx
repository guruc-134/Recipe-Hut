import React, { useState,useEffect } from 'react'
import Bot from '../../components/Finders/bot/bot.component';
import Card from '../../components/displayCard/card.component'
import './homePage.style.scss'
import '../../sass/pagination.styles.scss'
import Chef  from '../../components/Finders/chef/chef.component.jsx'
import  {firestore} from '../../backend/firebase/firebase.utils';
import ReactPaginate from 'react-paginate';
// import axios from 'axios'
// import '../../backend/spoonacular/recipes'
const HomePage = () => {
    const [homeRecipes,setHomeRecipes] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const   itemsPerPage = 20
    const pagesVisited = pageNumber * itemsPerPage

    // function  for pagination
    const displayItems = homeRecipes.slice(pagesVisited, pagesVisited + itemsPerPage)
    .map( item =>
        (
        item.found?
        <Card key = {item.id} recipe = {item}/>:null))
    
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
        getRecipesFromFireStore(3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    var pageCount = Math.ceil(homeRecipes.length / itemsPerPage)
    const changePage = ({selected}) =>
    {
        setPageNumber(selected)
    }
    return (
        <div className='home-page'>
            <h1> Home Page</h1>
            <Chef/>
            <div className='recipe-cards'>
            {
                homeRecipes?
                displayItems: null
            } 
            </div>
            <ReactPaginate
                previousLabel = {"previous"}
                nextLabel = {"next"}
                pageCount = {pageCount}
                onPageChange = {changePage}
                containerClassName = {"paginationBtns"}
                previousLinkClassName = {"previousBtn"}
                nextLinkClassName = {"nextBtn"}
                disabledClassName = {"paginationDisabled"}
                activeClassName  = {"paginationActive"}

            />
            <Bot/> 
        </div>
    )
}

export default HomePage
