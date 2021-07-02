import React, { useState} from 'react'
import axios from 'axios';
import '../../../backend/SR_VS/sr_vs'
import SpeechRecognition from "../../../backend/SR_VS/sr_vs";
import './chef.style.scss'
// console.log('my env files',)
const APIKEY = process.env.REACT_APP_API_KEY.split(" ")


function Chef() {
    const [chefResponse, setChefResponse] = useState({});
    const [question,setQuestion] = useState("")
    const [chefBtn,setChefBtn] = useState(false)
    const handleChefQuestion = (e) =>
    {
        e.preventDefault();
        var query = question.split(' ').join('+')
        // console.log(`https://api.spoonacular.com/recipes/quickAnswer?q=${query}&apiKey=${APIKEY[1]}`)
        axios.get(`https://api.spoonacular.com/recipes/quickAnswer?q=${query}&apiKey=${APIKEY[1]}`)
        .then(response =>
            {
                var {answer,image} = response.data;
                if (answer.length === 0) answer = "no results found for this query"
                setChefResponse({answer,image})
                if(answer)
                {
                    document.querySelector('.chef-answer').style.boxShadow ="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                    document.querySelector('.chef-answer').style.border ="3px  solid black";
                    document.querySelector('.chef-answer').style.backgroundColor ="rgba(223, 185, 185, 0.733)";
                }

            })
            .catch(err => console.log('some thing is wrong'))
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
            <button className='chef-btn' onClick ={handleChefBtn} >
                {
                    chefBtn? ( <img alt='chef-btn' className = 'chef-btn-img' src="https://img.icons8.com/office/60/000000/cook-male--v1.png"/>):(<img alt='chef-btn' src="https://img.icons8.com/carbon-copy/60/000000/chef-hat.png"/>)
                }           
            </button>
            <form className ='chef-form'>
            <SpeechRecognition setQuestion = {setQuestion} shallStop = {!chefBtn} />
                <input className ='chef-form-inp' onChange ={e =>setQuestion(e.target.value)} placeholder='nutrition related question' value = {question}/>
                <button className ='chef-form-btn' type = 'submit' onClick={handleChefQuestion} >ask </button>
            </form>
            </div>
            <div className='chef-answer'>
            { chefResponse.image?<img alt='chef-answer' className = 'chef-answer-img' src ={chefResponse.image}/>:null}
                <p className='chef-answer-txt'>{chefResponse.answer}</p>
            </div>
        </div>
    )
}

export default Chef
