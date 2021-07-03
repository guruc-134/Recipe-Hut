import React, { useState, useContext, useEffect} from 'react'
import { useHistory,useLocation, useParams } from "react-router-dom";
import './profilePage.style.scss'
import {firestore, storage} from '../../backend/firebase/firebase.utils';
import { UserContext } from '../../context/userContext';
import Card from '../../components/displayCard/card.component';
import {auth} from '../../backend/firebase/firebase.utils'
import ReactTooltip from "react-tooltip";
import BlogCard from '../../components/displayCard/blog/blog.component';
//  for image upload
const ProfilePage = (params) => {
    const user = useContext(UserContext)
    const handle  = useParams()
    const location = useLocation()
    const [fromNav,setFromNav] = useState(true)
    const [incomingUser,setIncomingUser] = useState() 
    const [favs,setFavs] = useState([])
    const [history,setHistory] = useState([])
    const [blogs,setBlogs] = useState([])
    const [userPhoto, setUserPhoto] = useState("")

    // image upload related code
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    console.log(imageAsFile)
    const handleImageAsFile = (e) => {
         const image = e.target.files[0]
         setImageAsFile(imageFile => (image))
     }
     const handleFireBaseUpload = (e) => {
            e.preventDefault()
            if(imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
            }
            const uploadTask = storage.ref(`/userImages_images/${imageAsFile.name}`).put(imageAsFile)
            uploadTask.on('state_changed', 
            (snapShot) => {
            console.log('this is a snapshot',snapShot)
            }, (err) => {
            console.log(err)
            }, () => {
            storage.ref('images').child(`${imageAsFile.name}`).getDownloadURL()
            .then(fireBaseUrl => {
                console.log('this is a url',{fireBaseUrl})
                submitUserPic(fireBaseUrl)
            })
            })
            
      }
  
//   
    const extractDetails = () =>{
        var queryString = handle.userId.split("-")
        firestore.doc(`/users/${queryString[1]}`).get()
        .then(resp=>{
            setIncomingUser(resp.data())
        })
         .catch(e=>{
            console.log(e)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        .catch(e=>{
            console.log(e)
        })
    }

    const getBlogs = () =>{
        const arr = []
        firestore.collection(`/users/${user.id}/myBlogs`).get()
        .then((snapshot) =>
        {
            // eslint-disable-next-line array-callback-return
            snapshot.docs.map( item =>
                {
                    arr.push({id:item.id, ...item.data()})
                    
                })
                console.log(arr)
                setBlogs(arr)
        })
        .catch(e=>{
            console.log(e)
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
        .catch(e=>{
            console.log(e)
        })
    }
    const submitUserPic = (picUrl) =>{
        closePictureForm()
        firestore.doc(`users/${user.id}/`).set({...user,picture:picUrl})
        // getUserInfo()
    }
    const signOut =()=>{
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Are you sure, you want to logout"))
        auth.signOut()
    }
    const closePictureForm = () =>{
        var formContainer = document.querySelector('.useProfilePicture-form-container')
        if(formContainer)
        formContainer.style.display = 'none';
    }
    const openPictureForm = () =>{
        var formContainer = document.querySelector('.useProfilePicture-form-container')
        if(formContainer)
        formContainer.style.display = 'block';
    }
    useEffect(()=>{
        getUserInfo()
    },[fromNav, location])
    return (
        <div className='profile'>
            <h1 className='heading-primary heading'> Profile</h1>
            {
                !fromNav?
                <div className = 'profile-details'>
                        <div className='profile-picture'>
                            {
                                incomingUser && incomingUser.picture?
                                <img src={incomingUser.picture} alt='profile_picture'/>:
                                <div className='no-imagediv'>
                                    <p>
                                        no image provided
                                    </p>
                                    <p>
                                <i className="fas fa-image">
                                </i>
                                    </p>
                                    </div>
                            }
                            </div>
                        <div>
                            {
                            incomingUser?
                            <div>
                            <p>public profile view</p>
                            <span className={`${incomingUser.isAdmin?"admin-tag":"user-tag"}`}>{incomingUser.isAdmin?"Admin":"User"}</span>
                            <h3><span>Name:</span>{incomingUser.displayName}</h3>
                            <h3><span>Email:</span> {incomingUser.email}</h3>
                            </div>:null
                            }
                        </div>
                        
                </div>:null
            }
            {fromNav?
            (<div>
                {/* profile picture */}
            
            <div className='useProfilePicture-form-container'>
                <div className='useProfilePicture-form'>
                <p className='closer' onClick={closePictureForm}><i class="far fa-window-close"></i></p>
                    <div>
                        <div>
                            <p>Preview</p>
                           { imageAsFile?
                            <img src={URL.createObjectURL(imageAsFile)} alt=" tag" width="100" />:null}
                            {/* <img alt='imgPreview' class='previewImage' src={userPhoto}></img> */}
                        </div>
                    </div>
                    <form onSubmit={handleFireBaseUpload}>
                    <input 
                        accept='image/*'
                        type="file"
                        onChange={handleImageAsFile}
                        id="userPhoto" name='userPhoto'
                        />
                            <button type='submit' children="upload"></button>
                    </form>
                </div>
            </div>

            {/* end of profile picture upload */}
            {/* self profile details view */}
            <div className = 'profile-details'>
            <div className='profile-picture self-picture'>
                {console.log(user)}
                {user && user.picture?
                    <img src={user.picture} alt='profile_picture'/>:<p>no image uploaded</p>
                }
                <div className='edit-btn' onClick={openPictureForm}>
                <i class="fas fa-user-edit"></i>
                </div>
            </div>
            <div>
                <span className={`${user.isAdmin?"admin-tag":"user-tag"}`}>{user.isAdmin?"Admin":"User"}</span>
                    <h3><span>Name:</span>{user?user.displayName:'login' }</h3>
                    <h3><span>Email:</span> {user? user.email : 'login' }</h3>
            </div>
            </div>

{/* signout */}
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
                {/* <h3 onClick={getBlogs}>Blogs</h3> */}
            {/* <div className='user-blogs-displayer'>  
                {
                    blogs?<div>
                        {blogs.map(item =>(
                            <BlogCard blog={item} key={item.id}/>
                        ))}
                    </div>:null
                }
            </div> */}
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
