import React, { useState,useEffect, useContext} from 'react'
import './blog.style.scss'
import {Link} from 'react-router-dom'
import { UserContext } from '../../../context/userContext';
import  {firestore} from '../../../backend/firebase/firebase.utils';
import ReactDOM from "react-dom";
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'
function BlogCard({blog}) {
    const [readMsg, setReadMsg] = useState("read more")
    const user = useContext(UserContext)
    const [blogComments,setBlogComments] = useState(null)
    // const [comment,setComment] = useState("")
    var comment;
    const [likes,setLikes] = useState(new Set())
    const [didLike,setDidLike] = useState(false)

    const readMore = () =>{
        if(readMsg === "read less")
            setReadMsg("read more")
        else
            setReadMsg("read less")
    }
    const postComment = (e) =>{
        e.preventDefault()
        if(comment.length>3)
        {e.preventDefault()
        firestore.collection(`blogs/daily_blogs/${blog.date}/${blog.fbId}/comments`).add({comment:comment, by:user,on: new Date()})
        // setComment("")
        e.target.children[0].value =""
        getCommentsFromFb()}
    }
    const handleCommentChange = (e) =>{
        // setComment(e.target.value)
        comment = e.target.value
    }
    const closeLikesDisplay = () =>{
        var likesBox = document.querySelector(`#likes_by_displayer-${blog.fbId}`)
        if(likesBox)
        likesBox.style.display = 'none'
        
    }
    const openLikesDisplay = () =>{
        var likesBox = document.querySelector(`#likes_by_displayer-${blog.fbId}`)
        if(likesBox)
        likesBox.style.display = 'inline-block'
        
    }
    const openCommentBox =()=>{
        var commentBox = document.querySelector(`#blog-comment-input-${blog.fbId}`)
        if (commentBox)
            commentBox.style.display='inline-block'
        getCommentsFromFb()
        
    }
    const closeCommentBox =()=>{
        var commentBox = document.querySelector(`#blog-comment-input-${blog.fbId}`)
        if (commentBox)
            commentBox.style.display='none'
    } 
    const getCommentsFromFb =() =>{
        firestore.collection(`blogs/daily_blogs/${blog.date}/${blog.fbId}/comments`).get()
        .then(resp=>{
            var arr =[]
            resp.docs.map(item=> arr.push(item.data()))
            arr.sort(function(a,b){
                return  a.on - b.on;
              });
            setBlogComments(arr)

        })
        .catch(e=>{
            toast('sorry for the inconvinence, backend capacity exceeded for today, tryout other features or come back tomorrow', 
           {position: toast.POSITION.TOP_RIGHT})
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getLikes = () =>{
        firestore.collection(`blogs/daily_blogs/${blog.date}/${blog.fbId}/likes`).get()
        .then(resp=>{
            var ss = new Set()
            resp.docs.map(item=> ss.add(item.data().id))
            ReactDOM.unstable_batchedUpdates(() => {
                setDidLike(ss.has(user.id))
                setLikes(ss)

             })

        })
        .catch(e=>{
            toast('sorry for the inconvinence, backend capacity exceeded for today, tryout other features or come back tomorrow', 
           {position: toast.POSITION.TOP_RIGHT})
        })
    }
    const addLike =() =>{
        getLikes()
        var ss = new Set()
        firestore.collection(`blogs/daily_blogs/${blog.date}/${blog.fbId}/likes`).get()
        .then(resp=>{
            resp.docs.forEach(item => {
                ss.add(item.data().id)
            })
            if(!ss.has(user.id))
                firestore.collection(`blogs/daily_blogs/${blog.date}/${blog.fbId}/likes`).add({id:user.id})
            
        })
        .catch(e=>{
            toast('sorry for the inconvinence, backend capacity exceeded for today, tryout other features or come back tomorrow', 
           {position: toast.POSITION.TOP_RIGHT})
        })
    }
    const deleteBlog = () =>{
        console.log('requested for deletion of ',blog.fbId)
        firestore.doc(`blogs/daily_blogs/${blog.date}/${blog.fbId}`).delete()
        .then((e)=>
        {
            console.log('successfully removed element')
        }
        )
        .catch((e)=>{
            console.log('deleting not possible')
        })
    }
    useEffect(()=>{
        getLikes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className = "blog-card" key = {blog.fbId}>
            {
                user.isAdmin?(
                    <div className='blog-delete-admin-btn' onClick={deleteBlog}>
                        <i className="fas fa-trash-alt"></i>
                    </div>):null
            }
            <div className = 'blog-content'>
                <p className='blog-title'>{blog.header}</p>
                <div className='blog-content-l'>
                    <div className='blog-content-l-img'>
                    { blog.files?<img src = {blog.files} alt = 'blogPIc'/>:<div className='no-imagediv'>
                        <p>
                            no image provided
                        </p>
                        <p>
                    <i className="fas fa-image">
                    </i>
                        </p>
                        </div>}
                    </div>
                    <div className='blog-content-l-header'>
                        <p className = 'blog-author'>
                            posted by : 
                        <Link
                            to={
                                {
                                    pathname:`/profile/user-${blog.postedBy.id}`,
                                    state:{
                                        fromNavbar:false
                                    }
                                }
                            }>
                        <span>
                            {blog.postedBy.displayName}
                        </span>
                            </Link>
                                </p>
                        <p className = 'blog-author'>-on : {blog.displayDate}</p>
                    </div>    
                </div>
                <div className='blog-content-r'>
                    <p className = 'blog-content-paragraph'>{blog.content.substring(0,100)}</p>
                    {blog.content.length>100?
                    <div>
                        <span>
                            {readMsg === "read less"?
                            (
                                <span className = 'content-more'
                                id={`content-more-${blog.fbId}`}> 
                                {blog.content.substring(100,blog.content.length)}
                                </span>):null
                            }
                            {
                                readMsg === "read more"?
                                <span>...</span>:null
                            }
                        </span>
                        <span className ='read-more' onClick={readMore}> {readMsg}</span>
                    </div>:null
                    }
                </div>
                </div>
                {/*  */}
                <div className='blog-reactions'>
                    <div>
                        <i className={`fas fa-comment-alt comment-${blog.fbId}`}  onClick={openCommentBox}></i>
                        {blogComments?<span>{blogComments.length}</span>:null}
                    </div>
                    <div>
                        <div className="likes_by_opener" id={`likes_by_opener-${blog.fbId}`} onClick = {openLikesDisplay}>
                        <i className="fas fa-box-open"></i>
                        </div>
                    <div className={`btn-like-${blog.fbId}`} >
                        {
                            !didLike?
                            <i className="fas fa-thumbs-up" onClick={addLike}></i>:
                            <i className="fas fa-thumbs-up liked"></i>
                        }
                        <span>{likes.size}</span>
                    </div>
                    </div>
                    <div className="likes_by_displayer" id={`likes_by_displayer-${blog.fbId}`}>
                            <p onClick = {closeLikesDisplay} className='close-btn' id={`close-likesbtn-${blog.fbId}`}>
                            <i className="far fa-window-close"></i>
                            </p>
                           { 
                           [...likes].map((userId,index)=>(
                               <p key = {`${blog.fbId}-likes-${index}`}>

                                <Link
                                    to={
                                        {
                                            pathname:`/profile/user-${userId}`,
                                            state:{
                                                fromNavbar:false
                                            }
                                        }
                                    }><i className="ri-map-pin-user-fill"></i></Link>
                                </p>
                                ))
                                }
                        
                    </div>
                </div>
                <div className="blog-comment-input" id= {`blog-comment-input-${blog.fbId}`}>
                    <div className='blog-reactions-close' id={`blog-reactions-close-${blog.fbId}`} onClick={closeCommentBox}>
                       <p className='close-btn'>
                       <i className="far fa-window-close"></i>
                        </p>
                    </div>
                    <div className='comments-box' id={`comments-box-${blog.fbId}`}>
                        { blogComments?
                            blogComments.map((cmt,index)=>(
                                <div className='comment-content' key = {`${blog.fbId}-comments-${index}`}>
                                    <p className='comment-text'>{cmt.comment}</p>
                                    <div>
                                    { cmt.by?
                                    <Link
                                    to={
                                        {
                                            pathname:`/profile/user-${cmt.by.id}`,
                                        state:{
                                            fromNavbar:false
                                        }
                                    }
                                    }>
                                    <br/>
                                    <span className='comment-author'>by- {cmt.by.displayName}
                                    </span>
                                    </Link>:null
                                }
                                </div>
                                </div>
                            )):null
                        }
                    <form onSubmit ={postComment} className='blog-comment-form'>
                        <textarea id ={`textArea_comment${blog.fbId}`} minLength='5' maxLength='100'
                            rows='3'
                            placeholder="give your feed back about the blog"
                            value={comment}
                            onChange={handleCommentChange}
                        >
                        </textarea>
                        <button type='submit'><i className="fas fa-share"></i></button>
                    </form>
                    </div>
                </div>
    </div>
    )
}

export default BlogCard
