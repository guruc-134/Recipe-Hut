import React, { useState,useEffect } from 'react'
import './App.css';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/homePage';
import ProfilePage from './pages/profile/profilePage';
import {auth, createUserProfileDocument, firestore} from './backend/firebase/firebase.utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchPage from './pages/search/search-page.component';
import SigninSignup from './pages/signin-signout/signin-signup.component';

function App() {
  const [currentUser,setCurrentUser] = useState({})
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
      { console.log('the current user is',currentUser)}
      <Router>
      <Navbar currentUser={currentUser}/>
        <Switch>
          <Route exact path ="/profile" component = {ProfilePage}/>
          <Route exact path ="/search" component = {SearchPage}/>
          <Route exact path ="/signin" component = {SigninSignup}/>
          <Route  path ="/" component = {HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
