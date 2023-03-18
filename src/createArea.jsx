import React, { useState } from "react";
function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setnote((previousNote) => {
      return {
        ...previousNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setnote({ title: "", content: "" });
    event.preventDefault();
  }
  // let submitNote = (event) => {
  //   const note = { title: "", content: "" };
  //   props.onAdd(note);
  //   event.preventDefault();
  // };
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        ></textarea>
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;
