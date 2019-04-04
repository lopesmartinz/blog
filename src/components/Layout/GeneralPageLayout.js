import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Nav from '../Nav/Nav';
import PostsList from '../Posts/PostsList';
import PostDetail from '../Posts/PostDetail';

class GeneralPageLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Nav />
        </header>
        <main>
          <Switch>
            <Route path="/posts" exact component={PostsList} />
            <Route path="/posts/:id" component={PostDetail} />
            <Route path="*" render={() => {
                return <p>Olha!! É um 404...</p>
              }} />
          </Switch>
        </main>
        <footer>

        </footer>
      </React.Fragment>
    );
  }
}

export default GeneralPageLayout;