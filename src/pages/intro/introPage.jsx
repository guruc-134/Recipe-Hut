import React from 'react'
import './intro.styles.scss'
import ReactTooltip from "react-tooltip";

function Intro() {
    return (
        <div className='intro'>
            <div className='star-repo'>
                If you liked the experience, consider staring the repository
                <a href='https://github.com/guruc-134/Recipe-Hut'>
                <i className="fas fa-star"></i>
                </a>
            </div>
            <div className='pageLogo'>
                <img src={`${process.env.PUBLIC_URL}/logo_RH.png`} alt='recipeHut' width="100" />
            </div>
            <br></br>
                <h2>
                    Some information that you might be looking for
                </h2>
              <div className="slider-intro">
                <div className='tags'>        
                <a  href="#1" ><i data-tip data-for="1" className="ri-number-1"></i></a>
                <a href="#2"><i  data-tip data-for="2" className="ri-number-2"></i></a>
                <a href="#developer"><i  data-tip data-for="developer" className="fas fa-laptop-code"></i></a>
                {/* <a href="#ingredients"><i className="fas fa-utensils"></i></a> */}
                </div>

                <div className="slides-intro">
                    <div id ='1'>
                        <h2>User Perspective</h2>
                        <div className='keywords user_perspective_keywords'>
                            <span>Sign in to Recipe Hut</span>
                            <span> Create account</span>
                            <span>Set up your profile</span>
                            <span>Get Random Recipes Feed</span>
                            <span>Customize the colors of your site</span>
                            <span>Search for recipes and get the answers as blogs and videos</span>
                            <span>View others profile</span>
                            <span>Write blogs</span>
                            <span>Join a community of cooking enthusiasts and share your recipes</span>
                            <span>get  random facts</span>
                            <span>Talk to chef and get nutritional information</span>
                            <span>Share recipes and profile of others</span>
                            <span> Show your appreciation through liking and commenting on others blogs</span>
                        </div>
                    </div>
                    <div id = '2' >
                        <h2>Facing Problems ?
                        </h2>
                        <h4>If you are facing any of the problems such as</h4>
                        <div className='keywords'>
                        <span>- not able to set profile picture </span>
                        <span>- not able to fetch blogs of the day</span>
                        <span>- not able to search for your favourite recipe</span>
                        <span>- or similar issues</span>
                        <p> It could either be due to overloading or the API call's, or exhaustion of firebase's daily quota for number of requests, please visit the site after some time</p>
                            </div>
                    </div>
                    <div id='developer'>
                            <h2> Hello,👋 curious developer</h2>
                            <h4> These are some keywords that you might find interesting </h4>
                            <div className='developer-keywords keywords'>
                                    <span>React</span>
                                    <span>Sass</span>
                                    <span>Firebase</span>
                                    <span>Firestore</span>
                                    <span>Glassmorphism</span>
                                    <span>User Authentication</span>
                                    <span>Speech Recognition</span>
                                    <span>Session Storage</span>
                                    <span>Toastification</span>
                                    <span>React Hooks</span>
                                    <span>React Router DOM</span>
                                    <span>Pagination</span>
                                    <span>REST API</span>
                                    <span>Axios</span>
                                    <span>React Dom</span>
                                    <span>React Tooltip</span>
                                    <span>Css Animations</span>
                                    <span>SVG components</span>
                                    <span>File transfer</span>
                                    <span>React Loading</span>
                                    <span>Font Awesome</span>
                                    <span>Remix icons</span>
                            </div>
                    </div>
                    <div>

                    </div>
                </div>
                </div>
                <ReactTooltip id="1" place="bottom" effect="solid" >
                    part one
                </ReactTooltip>
                <ReactTooltip id="2" place="bottom" effect="solid" >
                    part two 
                </ReactTooltip>
                
                <ReactTooltip id="developer" place="bottom" effect="solid" >
                    info for programmers
                </ReactTooltip>
        </div>
    )
}

export default Intro
