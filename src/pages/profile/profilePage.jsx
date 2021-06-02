import React from 'react'
import './profilePage.style.scss'
const ProfilePage = () => {
    return (
        <div className='profile'>
            <h1> Profile Page</h1>
                <div className='profile-person'>
                    <h3>Name: Person Name</h3>
                    <p> Total searches</p>
                    <p> site visit streak</p>
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
