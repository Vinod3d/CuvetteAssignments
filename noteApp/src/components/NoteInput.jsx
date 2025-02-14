import React, { useState } from 'react';
import './NoteInput.css';

const NoteInput = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState('');

  const handleAddNote = () => {
    const trimmedText = noteText.trim();
    if (trimmedText) {
      onAddNote(trimmedText);
      setNoteText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAddNote();
    }
  };

  return (
    <div className="note-input-container">
      <input
        type="text"
        placeholder="Type your note here..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAddNote}>Enter</button>
    </div>
  );
};

export default NoteInput;
