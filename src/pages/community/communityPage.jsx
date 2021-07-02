import React , {useState, useEffect} from 'react'
import  {firestore} from '../../backend/firebase/firebase.utils';
import {Link} from 'react-router-dom'
import BlogCard from '../../components/displayCard/blog/blog.component';
import './communityPage.styles.scss'
import ReactTooltip from "react-tooltip";
import Loader from '../../components/loader/loader.component'
function CommunityPage() {
    // const user = useContext(UserContext)
    const [pageBlogs, setPageBlogs] = useState("")
    const obtainDate = (date) =>{
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        date = yyyy +'-'+mm+'-'+dd;
        return date
    }
    const [date, setDate] = useState(obtainDate(new Date()))
    const getBlogsFromFireBase = (date,from='session') =>
    {
            const array = []
            var today = obtainDate(new Date())
            var searchDate = today 
            if(date != null)
            searchDate = date
            firestore.collection('blogs').doc('daily_blogs').collection(searchDate).get()
            .then( blogList =>
                {
                    blogList.docs.map( item =>
                        {
                            array.push({['fbId']:item.id, ...item.data()})
                        })
                        array.reverse()
                        setPageBlogs(array)
                        if(from ==='session')
                        sessionStorage.setItem('blogs',JSON.stringify(array))
                        
                })
    }
    const handleSessionStorage=()=>{
        if (!sessionStorage.getItem('blogs') || sessionStorage.getItem('blogs').length === 0)
        {
            console.log('getting from firebase')
            getBlogsFromFireBase();
        }

        else{
            console.log('getting from sessionStorage')
            setPageBlogs(JSON.parse(sessionStorage.getItem('blogs')))
        }
    }
    useEffect(() => {
        handleSessionStorage(date)
    }, [])
    const handleChange = (e) =>{
        // console.log('date changed',e.target.value)
        setDate(e.target.value)
    }
    const submitForm = (e) =>{
        e.preventDefault();
        getBlogsFromFireBase(date,"form")
    }
   
    return (
        <div className = "community-page">
            {/* <div className='game-div'>
            <Link  data-tip data-for="Game" className = 'community-page-game' to='/community/game'>
                   Game
                </Link>
            </div> */}
            <div className = 'community-page-write-div'>
                <Link  data-tip data-for="share-recipes" className = 'community-page-write' to='/community/write'>
                    <h3> Share your recipes <i className="ri-ball-pen-fill"></i></h3>
                </Link>
            </div>
            <div className='community-page-sidebar'>
                <form className='date-form' onSubmit = {submitForm}>
                <input className='date-form-ele' type='date'
                 data-tip data-for="fetch-blogs"
                value={date} onChange={handleChange}
                min="2021-06-24" max ={obtainDate( new Date())}/>
                <button className='date-form-ele' type='submit'><i className="fas fa-search"></i></button>
                </form>
            </div>
                {/*  displaying already written recipe blogs */}
                <div className = 'blog-displayer'>
                    {
                        pageBlogs.length>0?(pageBlogs.map( blog=> 
                            <BlogCard blog={blog} key={blog.id}/>
                            )):<h2> There are no blogs for this day</h2>
                    }
                </div>

                <ReactTooltip id="share-recipes" place="top" effect="solid" >
                    share your recipes with the world
                </ReactTooltip>
                <ReactTooltip id="fetch-blogs" place="left" effect="solid" >
                    fetch blogs based on date
                </ReactTooltip>
        </div>
    )
}

export default CommunityPage
