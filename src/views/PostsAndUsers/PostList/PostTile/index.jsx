import React from 'react';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';

export function PostTile({ postToDisplay }) { //eslint-disable-line
  return (
    <List component="div" disablePadding>
      <ListItem>
        <ListItemText
          primary={postToDisplay.title} //eslint-disable-line
          secondary={postToDisplay.body} //eslint-disable-line
        />
      </ListItem>
    </List>
  );
}
