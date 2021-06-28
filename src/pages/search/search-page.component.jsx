import React, { useState,useEffect } from 'react'
import Card from '../../components/displayCard/card.component';
import RecipeByIngredient from '../../components/Finders/recipeByIngredent-finder/recipeByIngredient.component';
import RecipeFinder from '../../components/Finders/recipeFinder/recipe-finder.component'
import VideoFinder from '../../components/Finders/videoFinder/video-finder.component'

import VideoCard from '../../components/displayCard/video/VideoCard.component';
import ReactPaginate from 'react-paginate';
import '../../sass/pagination.styles.scss'

// import Cookies from '../../Icons/Cookies'
// import Burger from '../../Icons/Burger'
// import Ramen from '../../Icons/Ramen'
// import Salads from '../../Icons/Salads'
// import Steak from '../../Icons/Steak'



import './search-page.style.scss';
function SearchPage() {
    const [recipe, setRecipe] = useState([]);

    const [pageNumber, setPageNumber] = useState(0)
    const   itemsPerPage = 10
    const pagesVisited = pageNumber * itemsPerPage
    var pageCount = Math.ceil(recipe.length / itemsPerPage)
    //  recipe search result cards
    const displayItems = recipe.slice(pagesVisited, pagesVisited + itemsPerPage)
    .map( item =>
        (
        item.found?
        <Card key = {item.id} recipe = {item}/>:null))

    const changePage = ({selected}) =>
    {
        setPageNumber(selected)
    }

    //  video search result cards
    const displayVideoItems = recipe.slice(pagesVisited,pagesVisited+itemsPerPage)
    .map(item=>(
        <VideoCard key ={item.id} recipe ={item.object}/>
    ))

    return (
        <div className='search'>
                {/* //  find by name */}
                <div className='slider-body'>

            <div class="slider">
                {/*  put tool tip */}
                <div className='tags'>
                <a href="#name" onClick={slide = 0}><i class="ri-input-method-fill"></i></a>
                <a href="#video" onClick={slide =1}><i class="ri-youtube-fill"></i></a>
                <a href="#ingredients"><i className="fas fa-utensils"></i></a>
                </div>

                <div class="slides">
                    <div id="name">    
                    <RecipeFinder recipe={recipe}
                    setRecipe={setRecipe}
                    />
                    </div>
                    <div id="video">
                        <VideoFinder setRecipe = {setRecipe}/>
                    </div>
                    <div id="ingredients">
                        coming soon !
                    </div>
                </div>
                {slide === 0?
                        <div>
    
                            <div className='recipe-cards-displayer'>
                            {
                                displayItems
                            }
                            </div>
                        </div>:null
                    }
                    {
                            !slide ===1?
                            <div>

                        
                        <div className='video-cards-displayer'>
                            {
                                displayVideoItems
                            }
                        </div>
                            </div> : null
                        }
                </div>
            </div>
                {/* <div className='bouncing-icons bouncing-icons-up'>
                <Burger className='svg burger'/>
                </div>
                <div className ='bouncing-icons bouncing-icons-down'>
                <Cookies className = 'svg cookies'/>
                </div>
                <div className='bouncing-icons bouncing-icons-up'>
                <Burger className='svg burger'/>
                </div>
                <div className ='bouncing-icons bouncing-icons-down'>
                <Ramen className= 'svg ramen'/>
                </div>
                <div className='bouncing-icons bouncing-icons-up'>
                <Burger className='svg burger'/>
                </div>
                <div className ='bouncing-icons bouncing-icons-down'>
                <Ramen className= 'svg ramen'/>
                </div> */}

                {
                    pageCount >1 ?
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
        </div>
    )
}
export default SearchPage
