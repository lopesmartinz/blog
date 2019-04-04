import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePageLayout from './components/Layout/HomePageLayout';
import GeneralPageLayout from './components/Layout/GeneralPageLayout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePageLayout} />
          <Route path="*" component={GeneralPageLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
