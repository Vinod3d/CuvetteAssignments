import React from 'react';
import './NotesList.css';

const NotesList = ({ notes }) => {
  if (notes.length === 0) {
    return <p>No notes available. Add a note!</p>;
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <p>{note.text}</p>
          <small>
            Created: {note.createdAt} | Updated: {note.updatedAt}
          </small>
        </div>
      ))}
    </div>
  );
};

export default NotesList;
