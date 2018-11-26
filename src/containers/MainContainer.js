import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/header';
import HomeContainer from './HomeContainer';
import AddUserContainer from './AddUserContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />

          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/addUser" component={AddUserContainer} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
