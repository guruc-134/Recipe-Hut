import React, { useState,useEffect } from 'react'
import axios from 'axios';
// import CropFreeIcon from '@material-ui/icons/CropFree';
import './chef.style.scss'
const APIKEY = ['8ab5fa53ef8f45d3a3d5c00e6966c9a3',
'cc548ac21e2642999689cdff7acb3468',
'8e743479e9f9467795afffbb26844379',
'c7a232f614b84f2bb1df4d3d7a3bc567',
'4a5b12ec6f3d4159b4b160e8808f4601',
'9a0f78a9a9fb4e1ba5857d871f42f1a8']
function Chef() {
    const [chefResponse, setChefResponse] = useState({});
    const [question,setQuestion] = useState("")
    const [chefBtn,setChefBtn] = useState(false)
    const handleChefQuestion = (e) =>
    {
        e.preventDefault();
        var query = question.split(' ').join('+')
        var object = {}
        console.log(`https://api.spoonacular.com/recipes/quickAnswer?q=${query}&apiKey=${APIKEY[2]}`)
        axios.get(`https://api.spoonacular.com/recipes/quickAnswer?q=${query}&apiKey=${APIKEY[2]}`)
        .then(response =>
            {
                const {answer,image} = response.data;
                setChefResponse({answer,image})
                document.querySelector('.chef-answer').style.boxShadow ="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                document.querySelector('.chef-answer').style.border ="3px  solid black";
                document.querySelector('.chef-answer').style.backgroundColor ="rgba(223, 185, 185, 0.733)";

            })
        setQuestion("")
    }
    const handleChefBtn = () =>
    {
        setChefBtn((prev) =>!prev)
        if (!chefBtn)
        {
            document.querySelector('.chef-form').style.display = "inline-block"  
        }
        else
        {
            document.querySelector('.chef-form').style.display = "none";
            document.querySelector('.chef-answer-img').src =""
            document.querySelector('.chef-answer-txt').innerHTML = ""
            document.querySelector('.chef-answer').style.boxShadow ="none"
            document.querySelector('.chef-answer').style.border ="none"
            document.querySelector('.chef-answer').style.backgroundColor ="transparent";

            
            

            
        }
    }

    return (
        <div className = 'chef'>
            <div className = 'chef-part-1'>
            {/* <div className = 'chef-gripper'>
            <img src="https://img.icons8.com/fluent-systems-regular/28/000000/hand-drag.png"/>
            </div> */}
            <button className='chef-btn' onClick ={handleChefBtn} >
                {
                    chefBtn? ( <img className = 'chef-btn-img' src="https://img.icons8.com/office/60/000000/cook-male--v1.png"/>):(<img src="https://img.icons8.com/carbon-copy/60/000000/chef-hat.png"/>)
                }           
            </button>
            <form className ='chef-form'>
                <input className ='chef-form-inp' onChange ={e =>setQuestion(e.target.value)} placeholder='nutrition related question' value = {question}/>
                <button className ='chef-form-btn' type = 'submit' onClick={handleChefQuestion} >ask </button>
            </form>
            </div>
            <div className='chef-answer'>
                <img className = 'chef-answer-img' src ={chefResponse.image}/>
                <p className='chef-answer-txt'>{chefResponse.answer}</p>
            </div>
        </div>
    )
}

export default Chef
