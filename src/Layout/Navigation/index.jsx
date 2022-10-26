import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { postsAndUsersPath, ticTacToePath, toDoListPath } from './LinksPaths';
import styles from '../../styles.module.css';

export function NavigationBar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className={styles.navigationBar}>
        <ul>
          <li>
            <Button variant="text" onClick={() => navigate(ticTacToePath)}>
              <p>Tic Tac Toe</p>
            </Button>
          </li>
          <li>
            <Button variant="text" onClick={() => navigate(postsAndUsersPath)}>
              <p>Posts And Users</p>
            </Button>
          </li>
          <li>
            <Button variant="text" onClick={() => navigate(toDoListPath)}>
              <p>To Do List</p>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
