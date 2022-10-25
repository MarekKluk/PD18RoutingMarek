import React, { useEffect, useState } from 'react';
import { ToDoListBody } from './ToDoListBody';

const backendUrl = 'http://localhost:3000';

export function ToDoList() {
  const [taskInputValue, setTaskInputValue] = useState('');
  const [todoList, setToDoList] = useState(null);
  const [finishedList, setFinishedList] = useState(null);
  const [idCounter, setIdCounter] = useState(0);

  const handleTaskInputChange = (event) => {
    setTaskInputValue(event.target.value);
  };

  const splitListByStatusAndFindBiggestId = (tasksList) => {
    const todo = [];
    const finished = [];
    let biggestId = 0;

    tasksList.forEach((task) => {
      const listToPushTo = task.completed ? finished : todo;
      listToPushTo.push(task);
      biggestId = task.id > biggestId ? task.id : biggestId;
    });
    setIdCounter(biggestId);

    return {
      todo,
      finished,
    };
  };

  const moveTaskToToDosList = (task) => {
    const taskIndexToRemove = finishedList.findIndex((searchedTask) => searchedTask.id === task.id);
    fetch(
      `${backendUrl}/todos/${task.id}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          completed: false,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((task) => { // eslint-disable-line
        todoList.push(task);
        setToDoList([...todoList]);
        finishedList.splice(taskIndexToRemove, 1);
        setFinishedList([...finishedList]);
      });
  };

  const moveTaskToFinishedList = (task) => {
    const taskIndexToRemove = todoList.findIndex((searchedTask) => searchedTask.id === task.id);
    fetch(
      `${backendUrl}/todos/${task.id}`,
      {
        method: 'PATCH',
        body: JSON.stringify({
          completed: true,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((task) => { // eslint-disable-line
        finishedList.push(task);
        setFinishedList([...finishedList]);
        todoList.splice(taskIndexToRemove, 1);
        setToDoList([...todoList]);
      });
  };
  const handleAddTaskButton = () => {
    const taskToAdd = {
      userId: 1,
      id: idCounter + 1,
      title: taskInputValue,
      completed: false,
    };
    setIdCounter(idCounter + 1);
    fetch(
      `${backendUrl}/todos`,
      {
        method: 'POST',
        body: JSON.stringify(taskToAdd),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      },
    )
      .then((response) => response.json())
      .then((task) => {
        todoList.push(task);
        setToDoList([...todoList]);
        setTaskInputValue('');
      })
      .catch(() => alert('Failed to add new task.'));
  };

  useEffect(() => {
    async function fetchToDos() {
      const todoListResponse = await fetch(`${backendUrl}/todos`);
      const todoListArray = await todoListResponse.json();
      const splittedLists = splitListByStatusAndFindBiggestId(todoListArray);
      setToDoList(splittedLists.todo);
      setFinishedList(splittedLists.finished);
      console.log(splittedLists.todo);
    }
    fetchToDos();
  }, []);

  return (
    <div className="app-container">
      <h1>To do:</h1>
      <div className="input-and-button-wrap">
        <input
          onInput={handleTaskInputChange}
          value={taskInputValue}
          placeholder="task name"
        />
        <button className="add-task-button" onClick={handleAddTaskButton}>Add task</button> {/* eslint-disable-line */}
      </div>
      {
                todoList && (
                <ToDoListBody
                  todoList={todoList}
                  finishedList={finishedList}
                  moveTaskToToDosList={moveTaskToToDosList}
                  moveTaskToFinishedList={moveTaskToFinishedList}
                />
                )
            }
    </div>
  );
}
