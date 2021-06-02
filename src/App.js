import './App.css';
import Navbar from './components/navbar/navbar.component';
import HomePage from './pages/home/homePage';
import ProfilePage from './pages/profile/profilePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import SearchPage from './pages/search/search-page.component';

function App() {
  return (
    <div className="app">
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path ="/profile" component = {ProfilePage}/>
          <Route exact path ="/search" component = {SearchPage}/>

          <Route  path ="/" component = {HomePage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
