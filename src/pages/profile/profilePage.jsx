import React, { useState, useContext} from 'react'
import './profilePage.style.scss'
import {firestore} from '../../backend/firebase/firebase.utils';
import { UserContext } from '../../context/userContext';
import Card from '../../components/displayCard/card.component';
const ProfilePage = () => {
    const user = useContext(UserContext)
    const [favs,setFavs] = useState([])
    const getuserDataFromFireStore = () =>
    {
        var store = new Set()
        firestore.collection(`/users/${user.id}/favourites`).get()
        .then((snapshot) =>
        {
            snapshot.docs.map( item =>
                {
                    store.add({["itemStoreid"]:item.id, ...item.data()})
                    
                })
                var storeArr = [...store]
                storeArr.sort((a,b)=>(
                    Date.parse(a.pushedAt) > Date.parse(b.pushedAt)
                ))
                setFavs(storeArr)
        })
    }
    return (
        <div className='profile'>
            <h1 class='heading-primary'> Profile</h1>
            <div className = 'profile-details'>
                <div className='profile-person'>
                    <h3>Name:{user?user.displayName:'login' }</h3>
                    <h3>Email: {user? user.email : 'login' }</h3>
                </div>
                <div className ='profile-favourites' onClick={getuserDataFromFireStore}>
                    <h3>favourites</h3>
                    <p> This section contains the names of dishes liked, favourited by the user</p>
                    <div className='fav-items'>
                        {
                            favs.map((item) => {
                                return(
                                    item.found?
                                    <Card key = {item.id} recipe = {item} fromFavs = {true} />:null)
                                })
                            }
                    </div>
                </div>
                {/*  optional persons bolgs will be present here with the #id tags so that when we press here in teh a tags wil lead them to that page */}
        </div>
    </div>
    )
}

export default ProfilePage
