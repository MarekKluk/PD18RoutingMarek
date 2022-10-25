import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { UserButton } from './UserButton';
import { PostList } from './PostList';
import { PhotosList } from './PhotosList';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const usersUrl = `${baseUrl}/users`;

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)); //eslint-disable-line
}

export function CommentsDashboard() {
  const [users, setUsers] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState();
  const [displayPostsOrPhotos, setDisplayPostsOrPhotos] = useState(false);

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const onUserClick = (userId) => setSelectedUserId(userId);

  return (
    <main>
      <Button variant="contained" onClick={() => setDisplayPostsOrPhotos(true)}>Display Posts</Button>
      <Button variant="contained" onClick={() => setDisplayPostsOrPhotos(false)}>Display Photos</Button>
      <div>
        {users
          ? users.map((user) => (
            <UserButton
              key={uuidv4()}
              user={user}
              onUserClick={onUserClick}
              activeButton={user.id === selectedUserId}
            />
          ))
          : 'Loading...'}
      </div>
      {displayPostsOrPhotos && <PostList userId={selectedUserId} />}
      {!displayPostsOrPhotos && <PhotosList userId={selectedUserId} />}
    </main>
  );
}
