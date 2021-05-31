import React from 'react'
import axios from 'axios'
import './bot.style.scss'
const APIKEY = ['8ab5fa53ef8f45d3a3d5c00e6966c9a3',
'cc548ac21e2642999689cdff7acb3468',
'8e743479e9f9467795afffbb26844379',
'c7a232f614b84f2bb1df4d3d7a3bc567 ']
const bot = ({jokes,setjokes}) => {
    const baseUrl = 'https://api.spoonacular.com';
    // joke finder completed points one per joke
    const findJoke = () =>
    {
        axios.get(`${baseUrl}/food/trivia/random?apiKey=${APIKEY[3]}`)
        .then(response =>
            {
                console.log(response.data.text)
                setjokes(response.data.text) 
            })
    }
    return (
        <div className='bot'>
            I am toby
            <button className='bot-btn' onClick={findJoke}>
                    @@
            </button>
            <p>
                <b> {jokes}</b>
                </p>
        </div>
    )
}

export default bot
