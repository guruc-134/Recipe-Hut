import React from 'react'
import './VideoCard.style.scss';
function VideoCard({recipe}) {
    return (
        <div className='video-card'>
            {console.log(recipe)}
            <h3> {recipe.shortTitle}</h3>
            <iframe  class='video-container'
            src={`https://www.youtube.com/embed/${recipe.youTubeId}`} 
            title="YouTube video player" frameBorder="1" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            >
             </iframe>
        </div>
    )
}

export default VideoCard
