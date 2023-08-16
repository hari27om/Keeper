import React, { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
// import notes from "../notes";
import CreateArea from "./components/CreateArea";

function App() {
  let [notes, setNotes] = useState([]);

  function addNote(newNote) {
    // console.log(newNote);
    setNotes((prevVal) => {
      return [...prevVal, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      // console.log(id);

      return prevNotes.filter((notes, idx) => {
        // console.log("this is idx" + idx);
        return id !== idx;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} deleteNote={deleteNote} />

      {notes.map((props, idx) => {
        return (
          <Note
            key={idx}
            id={idx}
            title={props.title}
            content={props.content}
            addNote={addNote}
            deleteNote={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
