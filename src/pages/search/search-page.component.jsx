import React, { useState,useEffect } from 'react'
import Card from '../../components/displayCard/card.component';
import RecipeByIngredient from '../../components/Finders/recipeByIngredent-finder/recipeByIngredient.component';
import RecipeFinder from '../../components/Finders/recipeFinder/recipe-finder.component'
import ReactPaginate from 'react-paginate';
import '../../sass/pagination.styles.scss'

import './search-page.style.scss';
function SearchPage() {
    const [recipe, setRecipe] = useState([]);
    const [pageNumber, setPageNumber] = useState(0)
    const   itemsPerPage = 20
    const pagesVisited = pageNumber * itemsPerPage
    var pageCount = Math.ceil(recipe.length / itemsPerPage)
    const displayItems = recipe.slice(pagesVisited, pagesVisited + itemsPerPage)
    .map( item =>
        (
        item.found?
        <Card key = {item.id} recipe = {item}/>:null))
    const changePage = ({selected}) =>
    {
        setPageNumber(selected)
    }
    return (
        <div className='search'>
            <div className='recipe-container'>
                <RecipeFinder recipe={recipe}
                setRecipe={setRecipe}
                />
                {/* <RecipeByIngredient recipe={recipe}
                setRecipe={setRecipe}/> */}
                <div className='recipe-cards'>
                {
                    displayItems
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
            </div>
            all the searches are done here
        </div>
    )
}
export default SearchPage
