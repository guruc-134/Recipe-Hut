import React, { useState,useEffect, useContext} from 'react'
import './blog.style.scss'
import {Link} from 'react-router-dom'
import { UserContext } from '../../../context/userContext';
import  {firestore} from '../../../backend/firebase/firebase.utils';
function BlogCard({blog}) {

    const [readMsg, setReadMsg] = useState("read more")
    const user = useContext(UserContext)
    const [blogComments,setBlogComments] = useState(null)
    const [comment,setComment] = useState("")
    const [likes,setLikes] = useState(new Set())
    const [didLike,setDidLike] = useState(false)
    // date parser

    const readMore = () =>{
        if(readMsg === "read less")
            setReadMsg("read more")
        else
            setReadMsg("read less")
    }
    const postComment = (e) =>{
        e.preventDefault()
        firestore.collection(`blogs/daily_blogs/${blog.date}/${blog.fbId}/comments`).add({comment:comment, by:user,on: new Date()})
        setComment("")
        getCommentsFromFb()
    }
    const handleCommentChange = (e) =>{
        setComment(e.target.value)
    }
    const openCommentBox =()=>{
        // var commentBoxClose = document.querySelector('.blog-reactions-close')
        // if(commentBoxClose)
        // commentBoxClose.style.display='inline-block'
        var commentBox = document.querySelector(`.blog-comment-input-${blog.id}`)
        if (commentBox)
            commentBox.style.display='inline-block'
            var commentBoxcc = document.querySelector(`.blog-comment-input`)
            if (commentBoxcc)
                commentBoxcc.style.display='inline-block'
        getCommentsFromFb()
        
    }
    const closeCommentBox =()=>{
        var commentBox = document.querySelector(`.blog-comment-input-${blog.id}`)
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
    }
    const getLikes = () =>{
        firestore.collection(`blogs/daily_blogs/${blog.date}/${blog.fbId}/likes`).get()
        .then(resp=>{
            var ss = new Set()
            resp.docs.map(item=> ss.add(item.data().id))
            setDidLike(ss.has(user.id))
            setLikes(ss)

        })
    }
    const addLike =() =>{
        getLikes()
        var ss = new Set()
        firestore.collection(`blogs/daily_blogs/${blog.date}/${blog.fbId}/likes`).get()
        .then(resp=>{
            resp.docs.map(item=> {
                ss.add(item.data().id)
            })
            if(!ss.has(user.id))
                firestore.collection(`blogs/daily_blogs/${blog.date}/${blog.fbId}/likes`).add({id:user.id})
        })
    }
    useEffect(()=>{
        getLikes()
    },[])
    return (
        <div className = "blog-card" key = {blog.id}>
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
                        <p className = 'blog-author'>-on : {blog.date}</p>
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
                                id={`content-more-${blog.id}`}> 
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
                <div className='blog-reactions'>
                    <div>
                        <i className={`fas fa-comment-alt comment-${blog.id}`}  onClick={openCommentBox}></i>
                        {blogComments?<span>{blogComments.length}</span>:null}
                    </div>
                    {/* <div className={`btn-like-${blog.id}`} onClick={addLike}>
                        {
                            !didLike?
                            <i className="fas fa-thumbs-up"></i>:
                            <i className="fas fa-thumbs-up liked"></i>
                        }
                        <span>{likes.size}</span>
                    </div> */}
                </div>
                    {/* <div className={`blog-reactions-close-${blog.id}`} onClick={closeCommentBox}>
                       <b>
                            X
                        </b>
                    </div> */}
                        <div className='comments-box'>
                            { blogComments?
                                blogComments.map(cmt=>(
                                    <div className='comment-content'>
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
                        </div>
                <div className={`blog-comment-input blog-comment-input-${blog.id}`}>
                    <form onSubmit ={postComment} className='blog-comment-form'>
                        <textarea minLength='5' maxLength='100'
                        rows='3'
                        placeholder="give your feed back about the blog"
                        value={comment}
                        onChange={handleCommentChange}
                        >
                        </textarea>
                        <button type='submit'><i class="fas fa-share"></i></button>
                    </form>
                </div>
    </div>
    )
}

export default BlogCard
