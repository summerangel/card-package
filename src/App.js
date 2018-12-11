import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import asyncComponent from './components/AsyncComponent';

import Demo from './containers/Demo';
import './App.css';

const MyAsync = asyncComponent(()=> import('./containers/My'));
const CardPackageAsync = asyncComponent(()=> import('./containers/CardPackage'));
const CardListAsync = asyncComponent(()=> import('./containers/CardList'));
const CardDetailAsync = asyncComponent(()=> import('./containers/CardDetail'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Demo}/>
            <Route exact path="/my" component={MyAsync}/>
            <Route exact path="/card-package" component={CardPackageAsync}/>
            <Route exact path="/card-list" component={CardListAsync}/>
            <Route exact path="/card-detail/:cardId" component={CardDetailAsync}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
