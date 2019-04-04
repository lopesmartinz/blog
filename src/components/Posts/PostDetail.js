import React, { Component } from 'react';
import axios from 'axios';

class PostDetail extends Component {
  state = {
    post: null
  }

  componentDidMount() {
    axios.get(`/posts/${ this.props.match.params.id }`)
      .then(response => {
        this.setState({ post: response.data });
      });
  }

  render() {
    let post = <p>Loading...</p>

    if(this.state.post !== null) {
      post = (
        <article>
          <h1>{this.state.post.title}</h1>
          <section>
            {this.state.post.body}
          </section>
        </article>
      );
    }

    return (
      <React.Fragment>
        {post}
      </React.Fragment>
    );
  }
}

export default PostDetail;