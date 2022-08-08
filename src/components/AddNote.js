import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function AddNote(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });
  const [isFocus, setIsFocus] = useState(false);

  function handleNoteChange(event) {
    const { value, name } = event.target;

    const inputType = event.target.name;
    setNewNote((prevValue) => {
      // destructor simple syntax
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function showRest() {
    setIsFocus(true);
  }

  return (
    <div className="addingNote">
      <div className="addingNote__addNoteField">
        <div className="addNoteField__titleInput">
          <input
            type="text"
            onChange={handleNoteChange}
            onClick={showRest}
            name="title"
            placeholder="Add a note..."
            value={newNote.title}
          />
        </div>

        {isFocus && (
          <div className="addNoteField__hiddenContent">
            <div className="addNoteField__contentInput">
              <textarea
                onChange={handleNoteChange}
                name="content"
                rows="5"
                columns="80"
                value={newNote.content}
                placeholder="Write your note..."
              />
            </div>
          </div>
        )}
      </div>
      {isFocus && (
        <Zoom in={true}>
          <Fab
            className="addNoteField__addButton"
            onClick={() => props.adding(newNote)}
          >
            <AddRoundedIcon />
          </Fab>
        </Zoom>
      )}
    </div>
  );
}

export default AddNote;
