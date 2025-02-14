/* eslint-disable no-unused-vars */
import React from 'react';
import './GroupList.css';

const GroupList = ({ groups, currentGroup, onSelectGroup }) => {
  return (
    <div className="group-list-container">
      <h2>Groups</h2>
      <ul className="group-list">
        {groups.map((group) => (
          <li
            key={group}
            className={group === currentGroup ? 'active' : ''}
            onClick={() => onSelectGroup(group)}
          >
            {group}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
