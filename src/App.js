import './App.css';
import TextareaMarkdown from 'textarea-markdown';

document.addEventListener('DOMContentLoaded', () => {
  const editor = document.querySelector('#editor');
  new TextareaMarkdown(editor, {
    endPoint: 'http://localhost:3000/api/image.json',
    paramName: 'file',
    responseKey: 'url'
  });
});

function App() {
  return (
    <div>
      <h2>Editor</h2>
      <textarea id="editor" data-preview="#preview"></textarea>

      <h2>Preview</h2>
      <div id="preview"></div>
    </div>
  );
}

export default App;
