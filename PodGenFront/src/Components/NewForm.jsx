import { React, useState } from "react";
import "../App.css";

const NewForm = () => {
  const API = import.meta.env.VITE_API_URL;
  const [newForm, setNewForm] = useState({ text: "" });

  const handleTextChange = (event) => {
    setNewForm({ ...newForm, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { text: newForm.text };
    try {
      fetch(`${API}/script`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((res) => {
          setNewForm((prev) => ({
            text: "",
            ...prev,
          }));
        });
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  console.log(newForm);

  return (
    <div className="pod_form">
      <form className="" onSubmit={handleSubmit}>
        <div className="upload-buttons">
          <button type="button">Upload Audio</button>
          <br />
          <button type="button">Enter Transcript</button>
        </div>
        <br />
        <textarea
          type="text"
          id="text"
          name="text"
          placeholder="Paste your text here..."
          value={newForm.text}
          onChange={handleTextChange}
          required
        ></textarea>
        <br />
        <button type="submit">Generate Podcast</button>
      </form>
    </div>
  );
};

export default NewForm;
