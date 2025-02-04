import "./App.css";

function App() {
  return (
    <>
      <h1>Podcast Generator</h1>
      <form className="pod_form">
        <div className="upload-buttons">
          <button type="button">Upload Audio</button>
          <br />
          <button type="button">Enter Transcript</button>
        </div>
        <br />
        <textarea
          type="text"
          id="transcript"
          name="transcript"
          placeholder="Paste your text here..."
        ></textarea>
        <br />
        <button type="submit">Generate Podcast</button>
      </form>
    </>
  );
}

export default App;
