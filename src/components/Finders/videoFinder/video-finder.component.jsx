import React, { useState,useEffect,useContext } from 'react'
import axios from 'axios';
import { UserContext } from '../../../context/userContext';
import {firestore} from '../../../backend/firebase/firebase.utils'

import './video-finder.style.scss';
const APIKEY = process.env.REACT_APP_API_KEY.split(" ")


function VideoFinder({setRecipe,setIsVideo}) {
    const [vidQuery ,setVidQuery] = useState("")
    const [number,setNumber] = useState(12)
    const user = useContext(UserContext)

    const obtainDate = (date) =>{
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        date = `${dd}-${mm}-${yyyy}`
        return date
    }
    const handleVideoRequest = (e) =>
    {
        e.preventDefault();
        if(user){
            const searchedOn = obtainDate(new Date())
            const timeStamp = new Date()
            firestore.collection(`/users/${user.id}/searchHistory`).add({timeStamp:timeStamp,icon:"fas fa-video" ,query:vidQuery,searchedOn:searchedOn})
        }
        axios.get(`https://api.spoonacular.com/food/videos/search?query=${vidQuery}&number=${number}&apiKey=${APIKEY[3]}`)   
        .then((response) =>
        {
            // console.log(response)
            var responseResults = []
            response.data.videos.map((video) =>
            {
                const {shortTitle,youTubeId,thumbnail} = video
                var object = {shortTitle,youTubeId,thumbnail}
                responseResults.push({object})
            })

            setRecipe(responseResults)
            setIsVideo(true)

        })
    }
    return (
        <div className='video-finder'>
            <h2> search for recipe -videos</h2>
            <form className='form' className='video-form'>
                <input className ='form-input' onChange={e=>setVidQuery(e.target.value)} placeholder='search for any cooking videos' value ={vidQuery}/>
                <button  className ='form-btn' type = 'submit' onClick={handleVideoRequest} ><i class="fas fa-search"></i> </button>
            </form>
        </div>
    )
}

export default VideoFinder
