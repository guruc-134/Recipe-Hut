import React ,{useState} from 'react'
import axios from 'axios'
import './bot.style.scss'
const APIKEY = ['8ab5fa53ef8f45d3a3d5c00e6966c9a3',
'cc548ac21e2642999689cdff7acb3468',
'8e743479e9f9467795afffbb26844379',
'c7a232f614b84f2bb1df4d3d7a3bc567 ']
function Bot() {
    const [facts, setFacts] = useState('')
    const baseUrl = 'https://api.spoonacular.com';
    // joke finder completed points one per joke
    const findFact = () =>
    {
        axios.get(`${baseUrl}/food/trivia/random?apiKey=${APIKEY[3]}`)
        .then(response =>
            {
                console.log(response.data.text)
                setFacts(response.data.text) 
            })
            // document.getElementsByClassName('bot-text').style.backgroundColor = 'pink';
    }
    const handleMsgClose = () =>
    {
        document.getElementsByClassName('bot-text').innerText = ' '
        setFacts("")
    }
    return (
        <div className='bot'>
            <div className ='bot-response'>
                {facts?(<button className='close-btn' onClick={handleMsgClose}>
                    X
                    </button>):null}
                <p className='bot-text'>
                    {facts}
                </p>
            </div>
            <div className='bot-btn' onClick={findFact} >
                <img src="https://img.icons8.com/color/48/000000/music-robot.png"/>
            </div>
            </div>

    )
}

export default Bot
