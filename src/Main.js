import React, { Component } from "react";
import {
  Route,
 NavLink,
 HashRouter
} from "react-router-dom";
import About from "./About";
import It from "./It";
import Contact from "./Contact";
import Footer from "./Footer" ;
import Careers from './Careers';
import Learning from './Learning';
import Hobby from './Hobby'

import { BrowserRouter as Router, Switch,Link } from 'react-router-dom';
//import { BrowserRouter as Router,Link} from 'react-router-dom'
//import {link} from "react-router-dom";
 

 
class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <grid>
    
          <h1>MY PORTFOLIO</h1>
      
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          
          <hr></hr>
          <ul className="header">
            
            <li><Link to={'/'} className="nav-link"> ABOUT </Link></li>
            <li><Link to={'/Careers'} className="nav-link">ACADEMIC CREDENTIALS </Link></li>
            <li><Link to={'/It'} className="nav-link">IT PROFICIENCY</Link></li>
            <li><Link to={'/Learning'} className="nav-link">EXPERIENTIAL LEARNING </Link></li>
           <li><Link to={'/Hobby'} className="nav-link">HOBBIES & INTEREST</Link></li>
            <li><Link to={'/Contact'} className="nav-link">CONTACT</Link></li>
          </ul>
          </nav>
          <hr />
          <Switch>
              <Route exact path='/' component={About} />
              <Route path='/Careers' component={Careers} />
              <Route path='/It' component={It} />
              <Route path='/Learning' component={Learning} />
              <Route path='/Hobby' component={Hobby} />
             <Route path='/Contact' component={Contact} />
          </Switch>
        <Footer></Footer>
        </grid>
        </div>
        
      </Router>
    );
  }
}
 
export default Main;