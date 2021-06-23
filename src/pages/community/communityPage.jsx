import React , {useState, useContext, useEffect} from 'react'
import  {firestore} from '../../backend/firebase/firebase.utils';
import {Link} from 'react-router-dom'
import { UserContext } from '../../context/userContext';

import './communityPage.styles.scss'
function CommunityPage() {
    const user = useContext(UserContext)
    const [pageBlogs, setPageBlogs] = useState("")
    const getBlogsFromFireBase = () =>
    {
            var today = new Date()
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            today = dd + '-' + mm + '-' + yyyy;
            const array = []
            firestore.collection('blogs').doc(today).collection('daily_blogs').get()
            .then( blogList =>
                {
                    blogList.docs.map( item =>
                        {
                            array.push({id:item.id, ...item.data()})
                        })
                        array.reverse()
                        setPageBlogs(array)
                })
    }
    useEffect(() => {
        getBlogsFromFireBase()
    }, [])

    return (
        <div className = "community-page">
            <Link to='/community/write'>
                <h3> Share your recipes</h3>
            </Link>
                {/*  displaying already written recipe blogs */}
                <div className = 'blog-displayer'>
                    {
                        pageBlogs?(pageBlogs.map( blog=> 
                            <div key = {blog.id}>
                                {console.log(blog)} 
                                <h2>{blog.header}</h2>
                               { blog.files?<img src = {blog.files} alt = 'blogPIc'/>:null}
                                <p class='blog-displayer-content'>{blog.content}</p>
                                <b><p>posted by : {blog.postedBy.displayName}</p></b>
                            </div>
                            )): null
                    }
                </div>
        </div>
    )
}

export default CommunityPage
