import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Podcast Generator</h1>
      <form className="pod_form">
        <div className="upload-buttons">
          <button>Upload Audio</button>
          <br />
          <button>Enter Transcript</button>
        </div>
        <br />
        <input
          type="text"
          id="transcript"
          name=""
          placeholder="Paste your text here..."
        />
        <br />
        <button>Generate Podcast</button>
      </form>
    </>
  );
}

export default App;
