import React, { Component } from 'react';

import Nav from '../Nav/Nav';
import LatestPosts from '../Posts/LatestPosts';

class HomePageLayout extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <Nav />
        </header>
        <main>
          <LatestPosts />
        </main>
        <footer>

        </footer>
      </React.Fragment>
    );
  }
}

export default HomePageLayout;