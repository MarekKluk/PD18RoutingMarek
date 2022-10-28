import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { UserButton } from './UserButton';
import { PostList } from './PostList';
import { PhotosList } from './PhotosList';
import './App.css';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const usersUrl = `${baseUrl}/users`;

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)); //eslint-disable-line
}

export function CommentsDashboard() {
  const [users, setUsers] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState();
  const [displayPostsOrPhotos, setDisplayPostsOrPhotos] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(usersUrl)
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const onUserClick = (userId) => setSelectedUserId(userId);

  useEffect(() => {
    const params = searchParams.get('q');
    setDisplayPostsOrPhotos(params === 'true');
  }, []);

  const handleDisplayPostsButton = () => {
    setDisplayPostsOrPhotos(true);
    navigate('/posts-and-users?q=' + true);
  };

  const handleDisplayPhotosButton = () => {
    setDisplayPostsOrPhotos(false);
    navigate('/posts-and-users?q=' + false);
  };

  return (
    <main>
      <Button variant="contained" onClick={handleDisplayPostsButton}>Display Posts</Button>
      <Button variant="contained" onClick={handleDisplayPhotosButton}>Display Photos</Button>
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
