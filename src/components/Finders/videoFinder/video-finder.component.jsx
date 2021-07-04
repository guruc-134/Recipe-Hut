import React, { useState,useContext } from 'react'
import axios from 'axios';
import { UserContext } from '../../../context/userContext';
import {firestore} from '../../../backend/firebase/firebase.utils'
import ReactDOM from "react-dom";
import './video-finder.style.scss';
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

const APIKEY = process.env.REACT_APP_API_KEY.split(" ")
const APIKEY_USE = APIKEY[Math.floor(8*Math.random())]
function VideoFinder({setRecipe,setIsVideo}) {
    const [vidQuery ,setVidQuery] = useState("")
    var number = 15;
    const user = useContext(UserContext)
    function shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
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
        axios.get(`https://api.spoonacular.com/food/videos/search?query=${vidQuery}&number=${number}&apiKey=${APIKEY_USE}`)   
        .then((response) =>
        {
            // console.log(response)
            var responseResults = []
            response.data.videos.forEach((video) =>
            {
                const {shortTitle,youTubeId,thumbnail} = video
                var object = {shortTitle,youTubeId,thumbnail}
                responseResults.push({object})
            })
            ReactDOM.unstable_batchedUpdates( () =>
            {
                setRecipe(shuffle(responseResults))
                setIsVideo(true)
                setVidQuery("")
            })
            .catch((err)=>{
                console.log(err)
                toast.warning("your request could not be fetched", 
                {position: toast.POSITION.BOTTOM_LEFT})
            }
                )

        })
    }
    return (
        <div className='video-finder'>
            <h2> search for recipe -videos</h2>
            <form className='form video-form'>
                <input className ='form-input' onChange={e=>setVidQuery(e.target.value)} placeholder='search for any cooking videos' value ={vidQuery}/>
                <button  className ='form-btn' type = 'submit' onClick={handleVideoRequest} ><i className="fas fa-search"></i> </button>
            </form>
        </div>
    )
}

export default VideoFinder
