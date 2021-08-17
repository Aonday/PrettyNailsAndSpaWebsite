// notice that index.js of Navbar is not mentioned since it is
// already looking for that file. Named anything else would have to add on

import './App.css';
import Navbar from './components/Navbar'; 
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import Signin from './pages/signin';
import Services from './pages/services';
import Location from './pages/location';
import { Component } from 'react';

import React, {useState} from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }
  return ( 
// <a> (anchor tags) with href creates a hyperlink to webpages,files,e.t.c, with react router, use "to".
    <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
      <Switch>
        <Route path="/" component = {Home} exact />
        <Route path="/signin" component = {Signin} exact />
        <Route path="/services" component = {Services} exact />
        <Route path="/location" component = {Location} exact />
      </Switch>
     
    </Router>
    
  );
}
 
export default App;
