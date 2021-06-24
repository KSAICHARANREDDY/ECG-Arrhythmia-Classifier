import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './components/layout/Home';
import './App.css';
import { AboutUs } from './components/layout/AboutUs';
import { Arrhythmia } from './components/layout/Arrhythmia';
import { Predict } from './components/layout/Predict';
import {Project} from './components/layout/Project'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/Project' component={Project}/>
      <Route exact path='/Teamdetails' component={AboutUs}/>
      <Route exact path='/AboutArrhythmia' component={Arrhythmia}/>
      <Route exact path='/Prediction' component={Predict}/>
      </Switch>
    </Router>
  );
}

export default App;
