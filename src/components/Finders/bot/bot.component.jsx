import SpeechRecognition from "../../../backend/SR_VS/sr_vs";
import React ,{useState} from 'react'
import {firestore} from '../../../backend/firebase/firebase.utils'
import ReactDOM from "react-dom";
import axios from 'axios'
import './bot.style.scss'
import Chef from '../chef/chef.component'
const APIKEY = ['8ab5fa53ef8f45d3a3d5c00e6966c9a3',
'cc548ac21e2642999689cdff7acb3468',
'8e743479e9f9467795afffbb26844379',
'c7a232f614b84f2bb1df4d3d7a3bc567 ']

function Bot() {
    const [diffX, setDiffX] = useState(0)
    const [diffY, setDiffY] = useState(0) 
    const [dragging, setDragging] = useState(false)
    const [styles,setStyles] = useState({})
    const [factsStore, setFactsStore] = useState([])
    const [facts, setFacts] = useState('')
    const baseUrl = 'https://api.spoonacular.com';
    const [chefResponse, setChefResponse] = useState({});
    const [question,setQuestion] = useState("")
    const [chefBtn,setChefBtn] = useState(false)
    // joke finder completed points one per joke

    const _dragStart= (e) => {
        ReactDOM.unstable_batchedUpdates(() => {
        setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left)
        setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top)
        setDragging(true)
        });
    }
    const _dragging = (e) =>{
        if(dragging) {
            var left = e.screenX - diffX;
            var top = e.screenY - diffY;
            setStyles(
                {
                    left: left,
                    top: top
                }
            );
        }
    }

    const _dragEnd = () =>{
        setDragging(false)
    }
    const findFact = () =>
    {
        if(factsStore.length === 0)
        {var botResponse = document.querySelector(".bot-response")
        if(botResponse){
            botResponse.style.display = "block"
            botResponse.style.border = "1px solid black"
        }
        firestore.collection('facts').doc('docs').collection('factsList').get()
        .then(response =>
            {
                var Arr = []
                response.docs.map(item =>{
                    Arr.push(item.data().fact)
                })
                setFactsStore(Arr)
                setFacts(Arr[-1])
            })}
        if(factsStore)
        setFacts(factsStore[Math.floor(Math.random()*(factsStore.length))]) 
    }
    const openBotDiv = ()=>{
        var botDiv = document.querySelector(".bot-div")
        if(botDiv) botDiv.style.display="inline-block"
        var botBtn = document.querySelector('.bot-btn')
        if(botBtn) botBtn.style.display = "none"
    }
    const handleMsgClose = () =>
    {
        var botResponse = document.querySelector('.bot-response')
        if(botResponse){
            botResponse.style.display = 'none';
            botResponse.style.border = "none";
        } 
            

        setFacts("")
    }
    const handleChefQuestion = (e) =>
    {
        e.preventDefault();
        var query = question.split(' ').join('+')
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
        handleChefAnswerOpen()
        setQuestion("")
    }
    const closeBotDiv = () =>{
        var botDiv = document.querySelector(".bot-div")
        if(botDiv) botDiv.style.display="none"
        var botBtn = document.querySelector('.bot-btn')
        if(botBtn) botBtn.style.display = "inline-block"
    }
    const handleChefAnswerClose = () =>{
        var chefAns = document.querySelector('.chef-answer')
        if(chefAns) chefAns.style.display = "none"
    }
    const handleChefAnswerOpen = () =>{
        var chefAns = document.querySelector('.chef-answer')
        if(chefAns) chefAns.style.display = "inline-block"
    }
    return (
        <div className='bot' style={styles} onMouseDown={_dragStart} onMouseMove={_dragging} onMouseUp={_dragEnd}>
            <div className='bot-btn' onClick={openBotDiv} >
            <i class="ri-blaze-fill"></i>
            </div>
            <div className='bot-div'>
                <span class="bot-div-close" onClick ={closeBotDiv}>X</span>
                <div className ='bot-response'>
                    {facts?(<span className='close-btn' onClick={handleMsgClose}>
                        X
                        </span>):null}
                    <p className='bot-text'>
                        {facts}
                    </p>
                </div>
                <div onClick={findFact}>
                    <i class="ri-repeat-2-line"></i>
                </div>
                <form className ='chef-form'>
                <SpeechRecognition setQuestion = {setQuestion} shallStop = {!chefBtn} />
                    <input className ='chef-form-inp' onChange ={e =>setQuestion(e.target.value)} placeholder='nutrition related question' value = {question}/>
                    <button className ='chef-form-btn' type = 'submit' onClick={handleChefQuestion} >ask </button>
                </form>
                <div className='chef-answer'>
                    <span class='chef-answer-close' onClick={handleChefAnswerClose}>X</span>
                    <div>
                { chefResponse.image?<img alt='chef-answer' className = 'chef-answer-img' src ={chefResponse.image}/>:null}
                    </div>
                    <div>
                    <p className='chef-answer-txt'>{chefResponse.answer}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Bot
