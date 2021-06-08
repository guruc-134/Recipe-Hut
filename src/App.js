import React, { useState,useEffect, useMemo} from 'react'
import './App.css';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/homePage';
import ProfilePage from './pages/profile/profilePage';
import {auth, createUserProfileDocument, firestore} from './backend/firebase/firebase.utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import SearchPage from './pages/search/search-page.component';
import SigninSignup from './pages/signin-signout/signin-signup.component';
import { UserContext } from './context/userContext';
const dotenv = require('dotenv')

function App() {
  dotenv.config()
console.log('my env files',process.env.React_App_API_KEY )

    const [currentUser,setCurrentUser] = useState({})
    const providerValue = useMemo( () => (
      currentUser
    ),[currentUser])

  var unsubscribeFromAuth = null;
  useEffect(() => {
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
      { console.log('apikey',process.env.React_App_API_KEY)}
      <Router>
      <Navbar currentUser={currentUser}/>
          <UserContext.Provider value ={providerValue}>
        <Switch>
          <Route exact path ="/search" component = {SearchPage}/>
          <Route exact path='/profile' render = {() =>!currentUser?
        (<Redirect to = '/'/>)
        :
        (<ProfilePage/>) }
        />
          <Route exact path='/signin' render = {() =>currentUser?
        (<Redirect to = '/'/>)
        :
        (<SigninSignup/>) }
        />
          <Route  path ="/" component = {HomePage}/>
        </Switch>
          </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
