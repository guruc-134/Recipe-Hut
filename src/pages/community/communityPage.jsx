import React , {useState, useEffect} from 'react'
import  {firestore} from '../../backend/firebase/firebase.utils';
import {Link} from 'react-router-dom'
import BlogCard from '../../components/displayCard/blog/blog.component';
import './communityPage.styles.scss'
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
    const getBlogsFromFireBase = (date) =>
    {
        console.log('passed date',date)
            const array = []
            console.log('fetching from firebase')
            var today = obtainDate(new Date())
            var searchDate = today 
            if(date != null)
            searchDate = date
            console.log('searchDate',searchDate)
            firestore.collection('blogs').doc('daily_blogs').collection(searchDate).get()
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
    const handleChange = (e) =>{
        console.log('date changed',e.target.value)
        setDate(e.target.value)
    }
    const submitForm = (e) =>{
        e.preventDefault();
            getBlogsFromFireBase(date)
    }

    return (
        <div className = "community-page">
            <div className = 'community-page-write-div'>
                <Link className = 'community-page-write' to='/community/write'>
                    <h3> Share your recipes <i className="ri-ball-pen-fill"></i></h3>
                </Link>
            </div>
            <div className='community-page-sidebar'>
                get recipes by date
                <form className='date-form'onSubmit = {submitForm}>
                <input type='date' value={date} onChange={handleChange} min="2021-06-24" max ={obtainDate( new Date())}/>
                <button type='submit'>fetch</button>
                </form>

            </div>
                {/*  displaying already written recipe blogs */}
                <div className = 'blog-displayer'>
                    {
                        pageBlogs?(pageBlogs.map( blog=> 
                            <BlogCard blog={blog} key={blog.id}/>
                            )): null
                    }
                </div>
        </div>
    )
}

export default CommunityPage
