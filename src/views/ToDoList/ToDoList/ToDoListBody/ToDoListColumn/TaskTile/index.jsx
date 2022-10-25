import React from 'react';

export function TaskTile({ task, moveTaskLeft, moveTaskRight }) { //eslint-disable-line
  return (
    <div className="task">
      <h3>{task.title}</h3> {/* eslint-disable-line */}
      {task.completed && <button onClick={moveTaskLeft}>left</button>} {/* eslint-disable-line */}
      {!task.completed && <button className="move-right-button" onClick={moveTaskRight}>right</button>} {/* eslint-disable-line */}
    </div>
  );
}
