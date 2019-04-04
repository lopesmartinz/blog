import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PostPreview from './PostPreview';

class PostsList extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('/posts')
      .then(response => {
        this.setState({
          posts: response.data.slice(0, 10)
        });
      });
  }

  render() {
    let posts = <p>Loading...</p>;

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
      <section className="posts">
        <ul>
          {posts}
        </ul>
      </section>
    );
  }
}

export default PostsList;