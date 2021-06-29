import React, { useState,useEffect, useMemo} from 'react'
import './App.css';
import './sass/svg.styles.scss';
import './sass/bouncingAnimation.scss';

import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/homePage';
import ProfilePage from './pages/profile/profilePage';
import CommunityPage from './pages/community/communityPage';
import RecipePage from './pages/recipePage/recipePage';
import Write from './pages/write/write.page';

import './sass/formInputs.scss'
import {auth, createUserProfileDocument} from './backend/firebase/firebase.utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SearchPage from './pages/search/search-page.component';
import SigninSignup from './pages/signin-signout/signin-signup.component';
import { UserContext } from './context/userContext';
// const dotenv = require('dotenv')
// dotenv.config()
console.log('my env files',process.env.REACT_APP_NAME)
function App() {

    const [currentUser,setCurrentUser] = useState({})
    const providerValue = useMemo( () => (
      currentUser
    ),[currentUser])

  var unsubscribeFromAuth = null;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps 
    unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>
      {
        if(userAuth)
        {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot (snapShot =>
            {
              setCurrentUser(
                {
                  id:snapShot.id,
                  ...snapShot.data()
                }
              )
            });
            console.log('the current user is',currentUser)
        }
        else 
        {
          setCurrentUser(userAuth )
        }
      })
    return () => {
      unsubscribeFromAuth()
    }
  }, []) 
  return (
    <div className="app">
      {/* { console.log('apikey',process.env.React_App_API_KEY)} */}
      <Router>
      <Navbar currentUser={currentUser}/>
          <UserContext.Provider value ={providerValue}>
        <Switch>
        <Route path ='/community/write' render = {() =>!currentUser?
        (<Redirect to = '/'/>)
        :
        (<Write/>) }
        />
          <Route exact path ="/search" component = {SearchPage}/>
          <Route exact path='/profile/:userId' render = {() =>!currentUser?
        (<Redirect to = '/'/>)
        :
        (<ProfilePage/>) }
        />
         <Route exact path='/community' render = {() =>!currentUser?
        (<Redirect to = '/'/>)
        :
        (<CommunityPage/>) }
        />
          <Route exact path='/signin' render = {() =>currentUser?
        (<Redirect to = '/'/>)
        :
        (<SigninSignup/>) }
        />
          <Route path ="/:from/:recipeId" component = {RecipePage}/>
          <Route  path ="/" component = {HomePage}/>
        </Switch>
          </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
