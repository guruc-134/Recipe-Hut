import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './video-finder.style.scss';
const APIKEY = ['8ab5fa53ef8f45d3a3d5c00e6966c9a3',
'cc548ac21e2642999689cdff7acb3468',
'8e743479e9f9467795afffbb26844379',
'c7a232f614b84f2bb1df4d3d7a3bc567',
'4a5b12ec6f3d4159b4b160e8808f4601',
'9a0f78a9a9fb4e1ba5857d871f42f1a8']

function VideoFinder() {
    const [vidQuery ,setVidQuery] = useState("")
    const [number,setNumber] = useState(3)
    const [vidResponse,setVidResponse] = useState([])
    const handleVideoRequest = (e) =>
    {
        e.preventDefault();
        axios.get(`https://api.spoonacular.com/food/videos/search?query=${vidQuery}&number=${number}&apiKey=${APIKEY[3]}`)   
        .then((response) =>
        {
            var responseResults = []
            response.data.videos.map((video) =>
            {
                const {shortTitle,youTubeId,thumbnail} = video
                var object = {shortTitle,youTubeId,thumbnail}
                responseResults.push({object})
            })

            setVidResponse(responseResults)
        })
    }
    return (
        <div className='video-finder'>
            I am video finder 
            <form className='video-form'>
                <input onChange={e=>setVidQuery(e.target.value)} className='input' placeholder='search for any cooking videos' value ={vidQuery}/>
                <button type = 'submit' onClick={handleVideoRequest} >ask </button>
            </form>
            <div className='video-response'>
                video response
                {console.log(vidResponse)}
                {
                    vidResponse.map((item)=>
                    (                    
                    <div key={item.youTubeId} className='video-response-item'>
                            <h3>{item.shortTitle}</h3>
                            <img src = {item.thumbnail} />
                            
                    </div>))
                }
            </div>
        </div>
    )
}

export default VideoFinder
