import React , {useState, useContext, useEffect} from 'react'
import firebase , {firestore} from '../../backend/firebase/firebase.utils';
import { UserContext } from '../../context/userContext';
function CommunityPage() {
    const user = useContext(UserContext)
    const [pageBlogs, setPageBlogs] = useState("")
    const [postHeader, setPostHeader] = useState("")
    const [blogContent, setBlogContent] = useState("")
    const [blogFile, setBlogFile] = useState("")

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
                            array.push(item.data())
                        })
                        array.reverse()
                        setPageBlogs(array)
                })
    }
    const submitPost = (e) =>
    {
        // console.log(blogFile[0])
        if (blogContent === "" || blogContent === undefined || blogFile === "")
        {
            console.log('not a valid input')
        }
        e.preventDefault();
        var blogObject = {
            header:postHeader,
            content:blogContent,
            files:blogFile,
            postedBy:user
        }
        var today = new Date()
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
        console.log(today)
        firestore.collection('blogs').doc(today).collection('daily_blogs').add(blogObject)
        setBlogContent("")
        setPostHeader("")
        setBlogFile("")
        getBlogsFromFireBase()

    }
    const handleChange =(e)=>
    {
        const {name,value,files}  = e.target

        if (name === 'heading') setPostHeader(value)
        if (name === 'blogContent') setBlogContent(value)
        else if (name === 'blogFile') 
        {
            var Img_file = URL.createObjectURL(files[0])
            setBlogFile(Img_file)
        }   
    }
    useEffect(() => {
        getBlogsFromFireBase()
    }, [])

    return (
        <div>
            <h1 className ="heading-primary">
                This is the community page
                </h1>
                create and post new recipes
                <form className='blog-form'>
                    
                    <div>
                    <input onChange= {handleChange} 
                    name = 'heading' className ='form-inputs' 
                    type = 'text' placeholder='heading' value ={postHeader}
                    required
                    />
                    </div>
                    <div> 
                    <textarea onChange= {handleChange} 
                    name ='blogContent' className='form-inputs' 
                    rows='5' cols='25' placeholder =' write your own recipe'
                    value={blogContent}
                    required
                    />
                    </div>
                    <p> upload picture</p>
                    <input name='blogFile' type ='file' accept='image/gif, image/jpeg, image/png' onChange ={handleChange} multiple></input>
                    {blogFile?<img src = {blogFile} alt ='recipe file' width="100"/>
                    :null}
                    <button type ='submit' onClick={submitPost}> Post !</button>
                </form>

                {/*  displaying already written recipe blogs */}
                <div className = 'blog-displayer'>
                    {
                        pageBlogs?(pageBlogs.map( blog=> 
                            <div>
                                <h2>{blog.header}</h2>
                                <img src = {blog.files} alt = 'blogPIc'/>
                                <p>{blog.content}</p>
                                <b><p>posted by : {blog.postedBy.displayName}</p></b>
                            </div>
                            )): null
                    }
                </div>
        </div>
    )
}

export default CommunityPage
