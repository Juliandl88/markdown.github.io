import { useState } from "react";
import { marked } from "marked";
import "./App.css";

function App() {
  const initialMarkdown = `
  ### Headers
    
  # Header 1
  ## Header 2
  ### Header 3
  #### Header 4
  ##### Header 5
  ###### Header 6
  
  ### List
  
  - list item one
  - list item two
  - list item three
  
  ### Links
  
  [Github](https://github.com/Juliandl88)
  
    
  ### Text Decorations
  
  *italic*
  
  **bold**
  
  ***bold and italic***
  
  ### Images
  
  ![alt text](https://i.pinimg.com/236x/72/bc/09/72bc091246361583fba7a93a31f898b9.jpg 'Cute Gold Retriever')
  
  ### Blockquote
  
  > "Arise, Awake and Stop not until the goal is reached."
  > -- Swami Vivekananda
  
  > "A winner is a dreamer who never gives up."
  > -- Nelson Mandela
  
  ### Code Block
  
  \`npm install create-react-app -g\`
  
  \`\`\`
  function myFunction(p1, p2) {
      return p1 * p2; 
  }
  
  const name = 'Julián'
  const age = 35
  const number = Math.random() * 10
  \`\`\`
  `;
  const [text, setText] = useState(initialMarkdown);

  marked.setOptions({
    breaks: true,
  });

  return (
    <div className="App">
      <textarea
        id="editor"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(text) }}
      ></div>
    </div>
  );
}

export default App;
