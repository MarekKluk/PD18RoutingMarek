import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from '../../styles.module.css';
import { postsAndUsersPath, ticTacToePath, toDoListPath } from './LinksPaths';

export function NavigationBar() {
  return (
    <div>
      <nav className={styles.navigationBar}>
        <ul>
          <li>
            <Link to={ticTacToePath}>
              <Button variant="text">
                <p>Tic Tac Toe</p>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={postsAndUsersPath}>
              <Button variant="text">
                <p>Posts And Users</p>
              </Button>
            </Link>
          </li>
          <li>
            <Link to={toDoListPath}>
              <Button variant="text">
                <p>To Do List</p>
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
