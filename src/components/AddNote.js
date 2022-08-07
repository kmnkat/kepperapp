import React, { useState } from "react";

function AddNote(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handleNoteChange(event) {
    const { value, name } = event.target;

    const inputType = event.target.name;
    setNewNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content,
        };
      } else {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });
  }

  return (
    <div className="addNoteField">
      <input type="text" onChange={handleNoteChange} name="title" />
      <input type="text" onChange={handleNoteChange} name="content" />
      <button onClick={() => props.adding(newNote)}>+</button>
    </div>
  );
}

export default AddNote;
