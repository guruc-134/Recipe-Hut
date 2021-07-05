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
import Intro from './pages/intro/introPage';
import Floater from './components/floaters/floater.component';

import {toast} from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'
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
toast.configure()
require('dotenv').config();

function App() {

    const [currentUser,setCurrentUser] = useState({})
    const providerValue = useMemo( () => (
      currentUser
    ),[currentUser])
  var unsubscribeFromAuth = null;
  try{

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
      }
      catch(e){
        console.error( e);
      }
  return (
    <div className="app">
      {/* { console.log('apikey',process.env.React_App_API_KEY)} */}
      
      <Router>
      <Navbar currentUser={currentUser}/>
          <UserContext.Provider value ={providerValue}>
          <Floater/>

        <Switch>
        <Route path ='/community/write' render = {() =>!currentUser?
        (<Redirect to = '/'/>)
        :
        (<Write/>) }
        />
          <Route exact path ="/search" component = {SearchPage}/>
          <Route  path ="/intro" component = {Intro}/>
          <Route exact path='/profile/:userId' render = {() =>!currentUser?
        (<Redirect to = '/signin'/>)
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
