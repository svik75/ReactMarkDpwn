import React, { useState } from 'react';
import outdent from 'outdent';

import Editor from './Editor';
import Preview from './Preview';

const initialContent = outdent`
# Heading H1
## Heading H2
This is just an example of the markdown previewer.
(Coool!)
### Link
[link](https://www.freecodecamp.org)
### Inline code
\`const foo = 'bar'\`
### Code block
\`\`\`js
function sum(a, b) {
  return a + b;
}
\`\`\`
### List
* item A
* item B
> Blockquote
![rabbit](https://www.walkervillevet.com.au/wp-content/uploads/2018/05/rabbit-eating-carrot-1030x541.jpg)
__Bold text__
`;

export default function App() {
  const [content, setContent] = useState(initialContent);

  function handleChange(event) {
    const { value } = event.target;
    setContent(value);
  }

  return (
    <div className="wrapper">
      <h1 className="title">A Simple React Markdown Previewer</h1>

      <div className="main">
        <Editor content={content} onChange={handleChange} />
        <Preview content={content} />
      </div>
    </div>
  );
}