import { useState } from 'react';
import './App.css';
const ReactMarkdown = require('react-markdown')
const markdown = `# hello
## howdy

1. list item 1
2. list item 2
  - sublist item 1
`


function Editor() {
  const [editor, setPreview] = useState();

  const handleChange = (e) => {
    setPreview(e.currentTarget.value)
  }
  
  return (
    <div>

      <h2>Editor</h2>
      <textarea id="editor" children={markdown} onChange={handleChange} />

      <h2>Preview</h2>
      <div id="preview">
        <ReactMarkdown>
            {editor}
          </ReactMarkdown>
      </div>

    </div>
  )
}

// function Preview() {
//   return (
//   )
// }

function App() {
  return (
    <div className="app">
      <Editor />
      {/* <Preview /> */}
    </div>
  ); 
}

export default App;
