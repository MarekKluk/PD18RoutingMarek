import React from 'react';
import { ToDoListColumn } from './ToDoListColumn';
import '../../App.css';

export function ToDoListBody({
  todoList, finishedList, moveTaskToToDosList, moveTaskToFinishedList, // eslint-disable-line
}) {
  return (
    <div className="column-container">
      <ToDoListColumn columnName="To do" tasksList={todoList} moveTaskToFinishedList={moveTaskToFinishedList} />
      <ToDoListColumn columnName="Finished" tasksList={finishedList} moveTaskToToDosList={moveTaskToToDosList} />
    </div>
  );
}
