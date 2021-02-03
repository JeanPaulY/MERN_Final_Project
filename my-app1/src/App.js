import React, {Component, component} from 'react';
import CreateSession from './CreateSession';
import ListSession from  './ListSession'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
export class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <div>
            <h1>Course Tracker</h1>
            <h2><Link to = '/'> Home </Link></h2>
            <h2><Link to = '/create'> Create </Link></h2>
          </div>
          <Route path= '/' exact component = {ListSession}/>
          <Route path= '/create' exact component = {CreateSession}/>
      </div>
      </Router>
      
    )
  }
}

export default App;
