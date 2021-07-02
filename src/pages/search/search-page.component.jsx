import React, { useState,useEffect } from 'react'
import Card from '../../components/displayCard/card.component';
import RecipeFinder from '../../components/Finders/recipeFinder/recipe-finder.component'
import VideoFinder from '../../components/Finders/videoFinder/video-finder.component'
import ReactTooltip from "react-tooltip";
import VideoCard from '../../components/displayCard/video/VideoCard.component';
import ReactPaginate from 'react-paginate';
import '../../sass/pagination.styles.scss'

import './search-page.style.scss';
function SearchPage() {
    const [recipe, setRecipe] = useState([]);
    const [isVideo,setIsVideo] = useState(false)
    const [pageNumber, setPageNumber] = useState(0)
    const   itemsPerPage = 10
    var slide = 0
    const pagesVisited = pageNumber * itemsPerPage
    var pageCount = Math.ceil(recipe.length / itemsPerPage)
    //  recipe search result cards
    const displayItems = recipe.slice(pagesVisited, pagesVisited + itemsPerPage)
    .map( item =>
        (
        item.found?
        <Card from={'search'} key = {item.id} recipe = {item}/>:null))

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
                <a  href="#name" ><i data-tip data-for="name" className="ri-input-method-fill"></i></a>
                <a href="#video"><i  data-tip data-for="video" className="ri-youtube-fill"></i></a>
                {/* <a href="#ingredients"><i className="fas fa-utensils"></i></a> */}
                </div>

                <div class="slides">
                    <div id="name">    
                    <RecipeFinder recipe={recipe}
                    setRecipe={setRecipe}
                    setIsVideo = {setIsVideo}
                    />
                    </div>
                    <div id="video">
                        <VideoFinder setRecipe = {setRecipe} setIsVideo = {setIsVideo}/>
                    </div>
                    {/* <div id="ingredients">
                        coming soon !
                    </div> */}
                </div>
                </div>
                {recipe.length>0?
                <div>
                    {
                    !isVideo?
                    <div className='recipe-cards-displayer'>
                        {
                        displayItems
                        }
                    </div>:null}
                    {
                    isVideo?
                        <div className='video-cards-displayer'>
                            {
                                displayVideoItems
                            }
                    </div> :null
                    }
                </div>:null}
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

                {/* tooltips */}
                <ReactTooltip id="name" place="top" effect="solid" >
                    get recipe articles
                </ReactTooltip>
                <ReactTooltip id="video" place="top" effect="solid">
                    get recipe videos from youtube
                </ReactTooltip>
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
