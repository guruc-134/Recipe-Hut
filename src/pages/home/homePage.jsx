import React, { useState,useEffect,  useContext } from 'react'
import Bot from '../../components/Finders/bot/bot.component';
import Card from '../../components/displayCard/card.component'
import './homePage.style.scss'
import '../../sass/pagination.styles.scss'
import { UserContext } from '../../context/userContext';

import  {firestore} from '../../backend/firebase/firebase.utils';
import ReactPaginate from 'react-paginate';

// import axios from 'axios'
// import '../../backend/spoonacular/recipes'
const HomePage = () => {
    const user = useContext(UserContext)

    const [homeRecipes,setHomeRecipes] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [docId, setDocId] = useState("")
    const [index,setIndex] = useState(3)
    const   itemsPerPage = 12;
    const pagesVisited = pageNumber * itemsPerPage
    // function  for pagination
    const displayItems = homeRecipes.slice(pagesVisited, pagesVisited + itemsPerPage)
    .map( item =>
        {
            return(
                item.ele?
                <Card from ={'recipe'} key = {item.ele.id} recipe = {item.ele} docId ={docId} index={item.ind}/>:null
                );
        })  
    
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    const markArray =(arr) =>{
        var newArr = []
        arr.map((ele,index)=>{
            newArr.push({['ind']:index,['ele']:ele})
        })
        return newArr
    }
    const getRecipesFromFireStore = (index) =>
    {
        var array = []
        firestore.collection('home-PageRecipes').get()
            .then( snapShot =>
                {
                    var  doc = snapShot.docs[index]
                    setDocId(doc.id)
                    var dd = doc.data()
                    array= dd.recipeResults
                    array = markArray(array)
                    console.log(array)
                    setHomeRecipes(shuffle(array))
                    sessionStorage.setItem('homePageRecipes',JSON.stringify(shuffle(array)))
                    sessionStorage.setItem('docId',JSON.stringify(doc.id))
                
            })
            .catch(error => console.log('error fetching the data from firebase',error))
    }

    const handleSessionStorage = () =>{
        if (!sessionStorage.getItem('homePageRecipes') || sessionStorage.getItem('homePageRecipes').length === 0)
        {
            console.log('getting from firebase')
            getRecipesFromFireStore(index);
        }

        else{
            console.log('getting from sessionStorage')
            setHomeRecipes(JSON.parse(sessionStorage.getItem('homePageRecipes')))
            setDocId(JSON.parse(sessionStorage.getItem('docId')))
        }
    }
    const handlePrimaryColorColor = (e) =>{
        var color = e.target.value
        document.documentElement.style.setProperty('--primary',color)
        document.querySelector('.color-primary').setAttribute("value",color)

    }
    const handleSecondaryColorColor = (e) =>{
        var color = e.target.value
        document.documentElement.style.setProperty('--secondary',color)
        document.querySelector('.color-secondary').setAttribute("value",color)
    }
    useEffect(() => {
        handleSessionStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    var pageCount = Math.ceil(homeRecipes.length / itemsPerPage)
    const changePage = ({selected}) =>
    {
        setPageNumber(selected)
    }
    return (
        <div className='home-page'>
            {user?<h3 className='welcome-header'>Welcome {user.displayName}</h3>:null}
        {/* <BlankBar/> */}
            <div className='color-picker'>
                <div class='color-primary'>
                    <input class='color-primary' onChange={handlePrimaryColorColor} type="color" />
                </div>

                <div class='color-secondary'>
                    <input  class='color-secondary' onChange={handleSecondaryColorColor}  type="color" />
                </div>
            </div>


            <div className='recipe-cards'>
            {
                homeRecipes?
                displayItems: <h3> Bringing recipes</h3>
            } 
            </div>
        { homeRecipes.length>1?
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
            />:null
            }
            <Bot/> 
        </div>
    )
}

export default HomePage
