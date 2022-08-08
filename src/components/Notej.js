import React from "react";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={() => props.deleting(props.id)}>
        <HighlightOffRoundedIcon />
      </button>
    </div>
  );
}

export default Note;
