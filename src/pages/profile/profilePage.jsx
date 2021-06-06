import React, { useState } from 'react'
import './profilePage.style.scss'
const ProfilePage = () => {
    const [userName, setUserName ] = useState("Guru Charan")
    const [streak,setStreak] = useState(10)
    return (
        <div className='profile'>
            <h1> Profile Page</h1>
                <div className='profile-person'>
                    <h3>Name:{userName}</h3>
                    <p> site visit streak : {streak} </p>
                </div>
                <div className ='profile-favourites'>
                    <h3>favourites</h3>
                    <p> This section contains the names of dishes liked, favourited by the user</p>
                </div>
                <p>
                you can also write notes and store them here
                </p>
        </div>
    )
}

export default ProfilePage
