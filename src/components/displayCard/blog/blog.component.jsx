import React, { useState,useEffect, useContext} from 'react'
import './blog.style.scss'
import {Link} from 'react-router-dom'
import { UserContext } from '../../../context/userContext';


function BlogCard({blog}) {
    const [readMsg, setReadMsg] = useState("read more")
    const user = useContext(UserContext)
    const readMore = () =>{
        if(readMsg === "read less")
            setReadMsg("read more")
        else
            setReadMsg("read less")
    }
    return (
        <div className = "blog-card" key = {blog.id}>
                <p id='blog-title'>{blog.header}</p>
            <div className = 'blog-content'>
                <div className='blog-content-l'>
                    <div className='blog-content-l-img'>
                    { blog.files?<img src = {blog.files} alt = 'blogPIc'/>:<div>no image provided by the user</div>}
                    </div>
                    <div className='blog-content-l-header'>
                        {/* {console.log(blog.postedBy)} */}
                        <p className = 'blog-author'>posted by : {blog.postedBy.displayName}</p>
                        <Link
                            to={
                                {
                                    pathname:`/profile/user-${blog.postedBy.id}`,
                                    state:{
                                        fromNavbar:false
                                    }
                                }
                            }>
                        Click here
                            </Link>
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
                {/* <div className='blog-reactions'>
                    <div className='like-btn'>
                    <i className="ri-thumb-up-fill"></i>
                    </div>
                    <div className='like-btn'>
                    <i className="ri-thumb-down-fill"></i>
                    </div>
                </div> */}
    </div>
    )
}

export default BlogCard
