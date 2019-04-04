import React from 'react';

const postPreview = (props) => {
  return (
    <article>
      <header>
        <h2>{props.title}</h2>
      </header>
      <section className="summary">
        {props.summary}
      </section>
    </article>
  );
}

export default postPreview;