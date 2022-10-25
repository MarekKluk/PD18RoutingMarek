import React from 'react';
import { TaskTile } from './TaskTile';

export function ToDoListColumn({
  columnName, tasksList, moveTaskToToDosList, moveTaskToFinishedList, // eslint-disable-line
}) {
  return (
    <section className="column">
      <h2>{columnName}</h2>
      {
            tasksList && tasksList.map((task) => ( // eslint-disable-line
              <TaskTile
                key={task.id}
                task={task}
                moveTaskLeft={() => moveTaskToToDosList(task)}
                moveTaskRight={() => moveTaskToFinishedList(task)}
              />
            ))
        }
    </section>
  );
}
