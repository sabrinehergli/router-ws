
import React from 'react';
import {Switch, Link, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Category from './components/Category';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
const App = () =>{
  // const task=prompt("give us a task");
  const isAuthenticated=true;
    return (
   
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
         </nav>
            <Switch>
           <Route exact path="/" component={Home}></Route>
           <Route path="/about"><About/></Route>
           <Route path="/contact" component={Contact}></Route>
           {/* <Route path="/dashboard" render={()=><div><Dashboard task={task}/></div>}></Route> */}
           {/* <Route path="/category" component={Category}></Route> */}
           <PrivateRoute path="/profile" isAuthenticated={isAuthenticated} exact component={Profile}/>
           </Switch>

      </div>
    
    );
  }

  export default App;