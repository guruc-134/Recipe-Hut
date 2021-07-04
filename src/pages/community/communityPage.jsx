import React , {useState, useEffect} from 'react'
import  {firestore} from '../../backend/firebase/firebase.utils';
import {Link} from 'react-router-dom'
import BlogCard from '../../components/displayCard/blog/blog.component';
import './communityPage.styles.scss'
import ReactTooltip from "react-tooltip";
// import Loader from '../../components/loader/loader.component'
import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'
toast.configure()
function CommunityPage() {
    const [pageBlogs, setPageBlogs] = useState("")
    const obtainDate = (date) =>{
        var dd = String(date.getDate()).padStart(2, '0');
        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = date.getFullYear();
        date = yyyy +'-'+mm+'-'+dd;
        return date
    }
    const [date, setDate] = useState(obtainDate(new Date()))
    const getBlogsFromFireBase = (date,from) =>
    {
            const array = []
            var today = obtainDate(new Date())
            var searchDate = today 
            if(date !=='today')
            searchDate = date
            firestore.collection('blogs').doc('daily_blogs').collection(searchDate).get()
            .then( blogList =>
                {
                    blogList.docs.forEach( item =>
                        {
                            array.push({'fbId':item.id, ...item.data()})
                        })
                        array.reverse()
                        setPageBlogs(array)
                        // if(from ==='session')
                        // sessionStorage.setItem('blogs',JSON.stringify(array))
                        
                })
                .catch(e=>{
                    toast.error('sorry for the inconvinence, backend capacity exceeded for today, tryout other features or come back tomorrow', 
                   {position: toast.POSITION.TOP_RIGHT})
                })
    }
    // const handleSessionStorage=()=>{
    //     if (!sessionStorage.getItem('blogs') || sessionStorage.getItem('blogs').length === 0)
    //     {
    //         console.log('getting from firebase')
    //         getBlogsFromFireBase('today','session');
    //     }
    //     else{
    //         console.log('getting from sessionStorage')
    //         setPageBlogs(JSON.parse(sessionStorage.getItem('blogs')))
    //     }
    // }
    const submitForm = (e) =>{
        e.preventDefault();
        getBlogsFromFireBase(date,"form")
    }
    useEffect(() => {
        getBlogsFromFireBase("today","form")
        // handleSessionStorage(date)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const handleChange = (e) =>{
        // console.log('date changed',e.target.value)
        setDate(e.target.value)
    }
   
    return (
        <div className = "community-page">
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
                min="2021-07-05" max ={obtainDate( new Date())}/>
                <button className='date-form-ele' type='submit'><i className="fas fa-search"></i></button>
                </form>
            </div>
                {/*  displaying already written recipe blogs */}
                <div className = 'blog-displayer'>
                    {
                        pageBlogs.length>0?(pageBlogs.map( blog=> 
                            <BlogCard blog={blog} key={blog.fbId}/>
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
