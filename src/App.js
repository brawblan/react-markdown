import { useState, useEffect } from 'react';
import './App.css';
const ReactMarkdown = require('react-markdown')
const markdown = `# hello
## howdy

1. list item 1
2. list item 2
  - sublist item 1

> This is a blockquote

Use two asterisks before and after a word/words for **bold** text.

Use backticks to write code \`<div></div>\`

Use three backticks before and after a codeblock
\`\`\`
// this is multi-line code

<h1>Hello World!</h1>
<p>Welcome to my Markdown Editor and Previewer</p>
something() {
  if (!idk) {
    return rad
  }
}

\`\`\`

Links are created by adding the link title between square brackets and putting the link inside parentheses next to it [] () [FCC](https://www.freecodecamp.com)

Images are added by using the same square bracket and parentheses as with link links, but adding an exclamation point before
![Random Pic](https://pixabay.com/images/search/flower/)
`


const Editor = ({setPreview}) => {

  const handleChange = (e) => {
    setPreview(e.currentTarget.value)
  }
  
  return (
    <div>
      <h2>Editor</h2>
      <textarea id="editor" children={markdown} onChange={handleChange} />
    </div>
  )
}

const Preview = ({editor}) => {
  return (
    <div>
      <h2>Preview</h2>
      <div id="preview">
        <ReactMarkdown>
          {editor}
        </ReactMarkdown>
      </div>
    </div>
  )
}

function App() {
  const [editor, setPreview] = useState(markdown);
  useEffect(() => {
    setPreview(editor);
  }, [editor])
  return (
    <div className="app">
      <Editor setPreview={setPreview} />
      <Preview 
        editor={editor} 
        dangerouslySetInnerHTML={{
          __html: {setPreview}
        }}  
        />
    </div>
  ); 
}

export default App;
