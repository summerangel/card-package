import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import asyncComponent from './components/AsyncComponent/AsyncComponent';

import Demo from './containers/Demo/Demo';
import './App.css';

const MyAsync = asyncComponent(()=> import('./containers/My/My.js'));
const CardPackageAsync = asyncComponent(()=> import('./containers/CardPackage/CardPackage.js'));
const CardListAsync = asyncComponent(()=> import('./containers/CardList/CardList.js'));
const CardDetailAsync = asyncComponent(()=> import('./containers/CardDetail/CardDetail.js'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router basename="/card">
          <Switch>
            <Route exact path="/" component={MyAsync}/>
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
