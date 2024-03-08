import React, { useRef, useState } from "react";
import "./App.css";
import JoditEditor from "jodit-react";

function App() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  
  return (
    <div className="App">
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => {setContent(newContent)
        console.log(newContent)
      }}
      />
      {content}
    </div>
  );
}

export default App;
