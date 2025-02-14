/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import GroupList from './components/GroupList';
import GroupPopup from './components/GroupPopup';
import NotesList from './components/NotesList';
import NoteInput from './components/NoteInput';
import './App.css';

function App() {
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  // Load groups from localStorage on initial render
  useEffect(() => {
    const storedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(storedGroups);
    if (storedGroups.length > 0) {
      setCurrentGroup(storedGroups[0]);
    }
  }, []);

  // Load notes when currentGroup changes
  useEffect(() => {
    if (currentGroup) {
      const storedNotes = JSON.parse(localStorage.getItem(currentGroup)) || [];
      setNotes(storedNotes);
    } else {
      setNotes([]);
    }
  }, [currentGroup]);

  // Save groups to localStorage whenever groups change
  useEffect(() => {
    localStorage.setItem('groups', JSON.stringify(groups));
  }, [groups]);

  // Save notes to localStorage whenever notes change
  useEffect(() => {
    if (currentGroup) {
      localStorage.setItem(currentGroup, JSON.stringify(notes));
    }
  }, [notes, currentGroup]);

  const addGroup = (groupName) => {
    if (!groups.includes(groupName)) {
      setGroups([...groups, groupName]);
      setCurrentGroup(groupName);
    }
  };

  const addNote = (noteText) => {
    const timestamp = new Date();
    const newNote = {
      id: timestamp.getTime(),
      text: noteText,
      createdAt: timestamp.toLocaleString(),
      updatedAt: timestamp.toLocaleString(),
    };
    setNotes([...notes, newNote]);
  };

  const selectGroup = (groupName) => {
    setCurrentGroup(groupName);
  };

  return (
    <div className="app-container">
      <header>
        <h1>Pocket Note App</h1>
        <button onClick={() => setIsPopupOpen(true)}>Create Group</button>
      </header>

      <div className="main-content">
        <GroupList
          groups={groups}
          currentGroup={currentGroup}
          onSelectGroup={selectGroup}
        />
        <div className="notes-section">
          <h2>{currentGroup ? currentGroup : 'Select a Group'}</h2>
          <NotesList notes={notes} />
          {currentGroup && <NoteInput onAddNote={addNote} />}
        </div>
      </div>

      {isPopupOpen && (
        <GroupPopup
          onClose={() => setIsPopupOpen(false)}
          onAddGroup={addGroup}
        />
      )}
    </div>
  );
}

export default App;
