import Header from "./Header";
import Footer from "./Footer";
import Note from "./Notej";
import notes from "../data/notes";
import AddNote from "./AddNote";
import { useState } from "react";

function App() {
  const [notesAr, setNotes] = useState(notes);

  function addNote(newNote) {
    setNotes((prevVal) => {
      return [...prevVal, newNote];
    });
  }

  function deleteNote(noteIndex) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index != noteIndex;
      });
    });
  }

  return (
    <div>
      <Header></Header>
      <AddNote adding={addNote}></AddNote>
      {notesAr.map((noteItem, index) => (
        <Note
          id={index}
          key={index}
          title={noteItem.title}
          content={noteItem.content}
          deleting={deleteNote}
        ></Note>
      ))}
      <Footer></Footer>
    </div>
  );
}

export default App;
