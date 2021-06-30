import React, { useState, useContext, useEffect} from 'react'
import { useHistory,useLocation, useParams } from "react-router-dom";
import './profilePage.style.scss'
import {firestore} from '../../backend/firebase/firebase.utils';
import { UserContext } from '../../context/userContext';
import Card from '../../components/displayCard/card.component';
import {auth} from '../../backend/firebase/firebase.utils'
import ReactTooltip from "react-tooltip";

const ProfilePage = (params) => {
    const user = useContext(UserContext)
    const handle  = useParams()
    const location = useLocation()
    const [fromNav,setFromNav] = useState(true)
    const [incomingUser,setIncomingUser] = useState() 
    const [favs,setFavs] = useState([])
    const [history,setHistory] = useState([])
    const extractDetails = () =>{
        var queryString = handle.userId.split("-")
        firestore.doc(`/users/${queryString[1]}`).get()
        .then(resp=>{
            setIncomingUser(resp.data())
        })
    }

    const getUserInfo = () =>{
        if(location.state !== undefined)
        setFromNav(location.state.fromNavbar)
        else{
            if(incomingUser && user)
          {  var ans = incomingUser.id === user.id
            setFromNav(ans)}
            else{
                setFromNav(false)
            }
        }
        extractDetails()
    }
    const getSearchHistory = () =>
    {
        const arr = []
        firestore.collection(`/users/${user.id}/searchHistory`).get()
        .then((snapshot) =>
        {
            // eslint-disable-next-line array-callback-return
            snapshot.docs.map( item =>
                {
                    arr.push({id:item.id, ...item.data()})
                    
                })
                setHistory(arr)
        })
    }
    const hideFavItems = () =>
    {
        var favItems = document.querySelector(".fav-items")
        if(favItems) favItems.style.display ="none"

    }
    const showFavItems = () =>
    {
        var favItems = document.querySelector(".fav-items")
        if(favItems) favItems.style.display ="flex"
    }
    const hideHistoryItems = () =>
    {
        var HistoryItems = document.querySelector(".history-items")
        if(HistoryItems) HistoryItems.style.display ="none"

    }
    const showHistoryItems = () =>
    {
        var HistoryItems = document.querySelector(".history-items")
        if(HistoryItems) HistoryItems.style.display ="flex"
    }
    const getuserDataFromFireStore = () =>
    {
        var store = new Set()
        firestore.collection(`/users/${user.id}/favourites`).get()
        .then((snapshot) =>
        {
            // eslint-disable-next-line array-callback-return
            snapshot.docs.map( item =>
                {
                    store.add({"itemStoreid":item.id, ...item.data()})
                    
                })
                var storeArr = [...store]
                storeArr.sort((a,b)=>(
                    Date.parse(a.pushedAt) > Date.parse(b.pushedAt)
                ))
                setFavs(storeArr)
        })
    }
    const signOut =()=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Are you sure, you want to logout"))
        auth.signOut()
    }
    useEffect(()=>{
        // getuserDataFromFireStore()
        // getSearchHistory()
        getUserInfo()
    },[fromNav,location])
    return (
        <div className='profile'>
            <h1 className='heading-primary heading'> Profile</h1>
            {
                
                !fromNav?
                
                <div className = 'profile-details'>
                    {
                        incomingUser?<div>
                            <p>public profile view</p>
                        <span className={`${incomingUser.isAdmin?"admin-tag":"user-tag"}`}>{incomingUser.isAdmin?"Admin":"User"}</span>
                        <h3><span>Name:</span>{incomingUser.displayName}</h3>
                        <h3><span>Display Name:</span> Cherry</h3>
                        <h3><span>Email:</span> {incomingUser.email}</h3>
                        </div>:null
                        }
                </div>:null
                
            }
            {fromNav?
            (<div>
            <div className = 'profile-details'>
            <span className={`${user.isAdmin?"admin-tag":"user-tag"}`}>{user.isAdmin?"Admin":"User"}</span>
                    <h3><span>Name:</span>{user?user.displayName:'login' }</h3>
                    <h3><span>Display Name:</span> Cherry</h3>
                    <h3><span>Email:</span> {user? user.email : 'login' }</h3>
            </div>
                <div>
                <span className='signOut' onClick= {signOut}> <i class="fas fa-sign-out-alt"></i> Sign out</span>
                </div>
                <div className ='profile-favourites' onClick={getuserDataFromFireStore}>
                    <h3 className='favs-heading'>
                        <i data-tip data-for="see-favs" onClick ={showFavItems} className="fas fa-heart"></i>
                        favourites                  
                        <i onClick ={showFavItems}  className="fas fa-heart"></i>
                        </h3>
                    {favs.length>0? 
                    <div className='fav-items'>
                        <i  onClick ={hideFavItems} data-tip data-for="hide-favs" className="hide fas fa-window-close"></i>
                        {
                            favs.map((item) => {
                                return(
                                    item.found?
                                    <Card className='fav-card' key = {item.id} recipe = {item} fromFavs = {true} />:null)
                                })
                            }
                    </div>:<p>List of all your favourite items</p>}
                </div>


                <div className = 'searchHistory' onClick = {getSearchHistory}>
                    <h3>
                    <i data-tip data-for="see-history" onClick={showHistoryItems}className="fas fa-history"></i>History
                    <i onClick={showHistoryItems}className="fas fa-history"></i>
                    </h3>
                    {history.length>0? <div className='history-items'>
                        <i data-tip data-for="hide-history" onClick ={hideHistoryItems}className="hide fas fa-window-close"></i>
                        {
                            history.map((item) =>
                            <div key ={item.id}>
                                <p>
                                <span className='icon'>
                                <i className={item.icon}/>
                                </span>
                                <span className='query'>
                                    {item.query} 
                                </span>
                                <span className='searchedOn'>
                                - {item.searchedOn}
                                </span>
                                </p>
                            </div>)
                            }
                    </div>:<p>your search history</p>}
                </div>
                </div>):null
            }
                <ReactTooltip id="see-favs" place="bottom" effect="solid" >
                    view
                </ReactTooltip>
                <ReactTooltip id="hide-favs" place="bottom" effect="solid" >
                    hide
                </ReactTooltip>
                <ReactTooltip id="hide-history" place="bottom" effect="solid" >
                    hide
                </ReactTooltip>
                <ReactTooltip id="see-history" place="bottom" effect="solid" >
                    view
                </ReactTooltip>
                {/*  optional persons bolgs will be present here with the #id tags 
                so that when we press here in teh a tags wil lead them to that page */}
    </div>
    )
}

export default ProfilePage
