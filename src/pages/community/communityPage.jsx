import React , {useState, useContext} from 'react'
import firebase , {firestore} from '../../backend/firebase/firebase.utils';
import { UserContext } from '../../context/userContext';
function CommunityPage() {
    // const user = useContext(UserContext)
    const [postHeader, setPostHeader] = useState("")
    const [blogContent, setBlogContent] = useState("")

    const submitPost = (e) =>
    {
        e.preventDefault();
        var blogObject = {
            header:postHeader,
            content:blogContent
        }
        var today = new Date()
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
        console.log(today)
        firestore.collection('blogs').doc(today).collection('blogs').add(blogObject)
        setBlogContent("")
        setPostHeader("")
    }
    const handleChange =(e)=>
    {
        const {name,value}  = e.target
        if (name === 'heading') setPostHeader(value)
        if (name === 'blogContent') setBlogContent(value)


    }
    return (
        <div>
            <h1>
                This is the community page
                </h1>
                create and post new recipes
                <form class='blog-form'>
                    
                    <div>
                    <input onChange= {handleChange} 
                    name = 'heading' className ='form-inputs' 
                    type = 'text' placeholder='heading' value ={postHeader}></input>
                    </div>
                    
                    <div> 
                    <textarea onChange= {handleChange} 
                    name ='blogContent' className='form-inputs' 
                    rows='5' cols='25' placeholder =' write your own recipe'
                    value={blogContent}>
                    </textarea>

                    </div>
                    <p> upload picture</p>
                    <input type ='file'></input>
                    <button onClick={submitPost}> Post !</button>
                </form>
        </div>
    )
}

export default CommunityPage
