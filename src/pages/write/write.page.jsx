import React , {useState, useContext, useEffect} from 'react'
import   {firestore} from '../../backend/firebase/firebase.utils';
import ReactDOM from "react-dom";
import { UserContext } from '../../context/userContext';
import FormInput from '../../components/form-input/form-input.component';
import './write.styles.scss'
import CustomButton from '../../components/customButton/custom-button.component';
import {Link} from 'react-router-dom'


function Write() {
    const user = useContext(UserContext)

    const [blogHeader, setPostHeader] = useState("")
    const [blogContent, setBlogContent] = useState("")
    const [pageBlogs, setPageBlogs] = useState([])
    const [blogFile, setBlogFile] = useState("")
    const resetStates  = () =>
    {
        //  preventing rerendering after each state change
        ReactDOM.unstable_batchedUpdates( () =>
        {
            setBlogContent("")
            setPostHeader("")
            setBlogFile("")
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
            header:blogHeader,
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
        resetStates()
        setPageBlogs( previous => previous.push(blogContent))
    }
    const convertToBase64 = (image) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(image);
    
        return new Promise((resolve, reject) => {
            fileReader.onload = () => {
                resolve(fileReader.result);
            }
    
            fileReader.onerror = () => {
                reject(fileReader.error);
            }
        })
    }
    
    const handleChange = async (e)=>
    {
        const {name,value,files}  = e.target

        if (name === 'heading') setPostHeader(value)
        if (name === 'blogContent') setBlogContent(value)
        else if (name === 'blogFile') 
        {
            var Img_file = await convertToBase64(files[0])
            setBlogFile(Img_file)
        }   
    }
    // 
    // drag and drop files 
    const droparea = document.querySelector(".droparea");
    const preview = document.querySelector(".previewImage");
    if(droparea)
    {
        droparea.addEventListener("dragover", (e) => {
        e.preventDefault();
        droparea.classList.add("hover");
        });

        droparea.addEventListener("dragleave", () => {
        droparea.classList.remove("hover");
        });

        droparea.addEventListener("drop", async (e) => {
        e.preventDefault();
        const image = e.dataTransfer.files[0];
        setBlogFile( await convertToBase64(image))
        const type = image.type;

        if (
           type.startsWith("image/")
        ) {
            return upload(image);
        } else {
            droparea.setAttribute("class", "droparea invalid");
            droparea.innerText = "Invalid File Format!";
            return false;
        }
        });

        const upload = (image) => {
        droparea.setAttribute("class", "droparea valid");
        droparea.innerText = "Added " + image.name;
        };
    }
        useEffect(() => {
            
        }, [])
    return (
        <div>
            <div className='write-blog'>
            <Link to="/community" class="link"> <i class="ri-arrow-left-circle-fill"></i> </Link>  
                <form onSubmit={submitPost}>
                    <div>
                        <input class='input-heading' name='heading' type='text' value={blogHeader} onChange={handleChange} placeholder='Blog heading'></input>
                    </div>
                    <div>
                        <textarea class='input-content' name='blogContent' type='text' placeholder='paragraph' onChange={handleChange} value={blogContent}></textarea>
                    </div>
                    <div className='fileContainer'>
                        <div>
                            {blogFile?
                            <div>
                                <p>preview</p>
                                <img alt='imgPreview' class='previewImage' src={blogFile}></img>
                            </div>
                            :null}
                        </div>
                        <div class="droparea">
                            <p>
                            <label htmlFor='blogFile'>
                                Drop the image here or click to select an Image
                                </label>
                            </p>
                        <input type='file' onChange={handleChange} id="blogFile" name='blogFile' style={{display:"none"}}></input>

                        </div>
                    </div>
                    <CustomButton type='submit' children="Post"></CustomButton>
                </form>
            </div>
        </div>
    )
}

export default Write