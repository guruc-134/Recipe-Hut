import React ,{useState} from 'react'
import axios from 'axios';
import './news.style.scss'
function News() {
    const [userInput, setUserInput]  = useState("");
    const [results, setResults] = useState([]);
    const APIKEY = 'ENTER THE API KEY'
    const handleInputChange = (e) =>
    {
        
        setUserInput(e.target.value)
    }
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        // var query = userInput;
        var resultArray = []
        var searchUrl = `https://gnews.io/api/v4/search?q=${userInput}&token=${APIKEY}`;
        axios.get(searchUrl)
        .then((resp) =>
        {
            resp.data.articles.map((item) =>
            {
                const {description,title,image}= item
                resultArray.push({description,title,image})
            })
            console.log(resultArray)
            setResults(resultArray)
        })
    }
    return (
        <div className='script'>
            The search bar
            <div className='script-inputs'>
                {/* input go here  */}
                <input className='input' placeholder='enter your input'
                value={userInput}
                onChange={handleInputChange}></input>
                <button type='submit' onClick ={handleSubmit}> get</button>
            </div>
            <div className='script-results'>
                the news component
                {
                    results.map((object) =>
                    (
                        <div className='card'>
                            <div className='card-image'>
                            <img src ={object.image} className='card-img'/>
                            </div>
                            <div className='card-content'>
                            <h3 className='card-header'> {object.title}</h3>
                            <p className='card-txt'>{object.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default News
