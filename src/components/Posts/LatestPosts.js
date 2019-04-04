import React, { Component } from 'react';
import { Link } from'react-router-dom';
import axios from 'axios';

import PostPreview from './PostPreview';

class LatestPosts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('/posts') // base url is defined on index.js
      .then(response => {
        this.setState({
          posts: response.data.slice(0, 4)
        });
      });
  }

  render() {
    let posts = <p>Loading...</p>

    if(this.state.posts.length > 0) {
      posts = this.state.posts.map(post => {
        return (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>              
              <PostPreview
                title={post.title}
                summary={post.body} />
            </Link>
          </li>
        );
      });
    }

    return (
      <section className="latest-posts">
        <ul>
          {posts}
        </ul>
      </section>
    );
  }
}

export default LatestPosts;