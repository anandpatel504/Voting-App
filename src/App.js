import React from 'react';
import './App.css';
import Voting_page from './Components/voting_page';

import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
export class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>  
          <Route path="/" component={Voting_page} />
          <Redirect to="/"/>
          </Switch>
        </Router>
        <br/>
      </div>
    )
  }
}

export default App;
