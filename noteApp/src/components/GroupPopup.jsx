/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from 'react';
import './GroupPopup.css';

const GroupPopup = ({ onClose, onAddGroup }) => {
  const popupRef = useRef();
  const inputRef = useRef();
  const [groupName, setGroupName] = useState('');

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = () => {
    const trimmedName = groupName.trim();
    if (trimmedName) {
      onAddGroup(trimmedName);
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="popup-overlay">
      <div className="popup-content" ref={popupRef}>
        <h3>Create New Group</h3>
        <input
          type="text"
          placeholder="Group name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
        <button onClick={handleSubmit}>Create</button>
      </div>
    </div>
  );
};

export default GroupPopup;
