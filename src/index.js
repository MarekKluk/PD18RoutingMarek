import React from 'react';
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import root from 'react-dom';
import { TicTacToeGame } from './views/TicTacToe';
import { CommentsDashboard } from './views/PostsAndUsers/CommentsDashboard';
import { Layout } from './Layout';
import { postsAndUsersPath, ticTacToePath, toDoListPath } from './Layout/Navigation/LinksPaths';
import { ToDoListApp } from './views/ToDoList/App';
import { Home } from './Layout/Home';

export function FirstRouterApp() {
  return (
    <Router> {/* eslint-disable-line */}
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} > </Route> {/* eslint-disable-line */}
          <Route path={ticTacToePath} element={<TicTacToeGame />} layout={Layout}> </Route>
          <Route
            path={postsAndUsersPath}
            element={<CommentsDashboard />}
            layout={Layout}
          />
          <Route path={toDoListPath} element={<ToDoListApp />} layout={Layout}> </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

root.render(<FirstRouterApp />, document.getElementById('root'));
