import React from 'react';
import marked from 'marked';

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace('<a', "<a target='_blank' ");
};
marked.setOptions({ renderer, gfm: true, breaks: true });

export default function Preview(props) {
  const markdown = marked(props.content);

  return (
    <div>
      <header>Preview</header>
      <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  );
}