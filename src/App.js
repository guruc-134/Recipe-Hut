import React, { useState,useEffect } from 'react'
import './App.css';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/homePage';
import ProfilePage from './pages/profile/profilePage';
import {auth} from './backend/firebase/firebase.utils';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SearchPage from './pages/search/search-page.component';
import SigninSignup from './pages/signin-signout/signin-signup.component';

function App() {
  const [currentUser,setCurrentUser] = useState('')
  var unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(user =>
      {
        setCurrentUser(user)
        console.log(user)
      })
    return () => {
      unsubscribeFromAuth()
    }
  }, []) 
  return (
    <div className="app">
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
