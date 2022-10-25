import React from 'react';
import Button from '@mui/material/Button';

export function UserButton({ user, onUserClick, activeButton }) { //eslint-disable-line
  const handleUserButtonClick = () => {
    onUserClick(user.id); //eslint-disable-line
  };

  return (
    <Button sx={{ backgroundColor: activeButton ? 'orange' : 'white' }} variant="outlined" onClick={handleUserButtonClick}>
      {' '}
      {user.username} {/* eslint-disable-line */}
      {' '}
    </Button>
  );
}
