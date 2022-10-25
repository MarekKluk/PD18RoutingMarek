import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ArticleIcon from '@mui/icons-material/Article';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { PostTile } from './PostTile';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const postsUrl = `${baseUrl}/posts`;

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)); //eslint-disable-line
}
export function PostList({ userId }) { //eslint-disable-line
  const [posts, setPosts] = useState(null);
  const [openPostsCollapse, setOpenPostsCollapse] = React.useState(true);
  const [postsCache, setPostsCache] = useState({});

  const handleCollapsePostsList = () => {
    setOpenPostsCollapse(!openPostsCollapse);
  };
  useEffect(() => {
    if (userId in postsCache) {
      setPosts(postsCache[userId]);
      return;
    }
    async function fetchPosts() {
      const response = await fetch(`${postsUrl}?userId=${userId}`);
      const postsArray = await response.json();
      setPosts(postsArray);
      setPostsCache({ ...postsCache, [userId]: postsArray });
    }
    fetchPosts()
      .catch(console.error);
  }, [userId]);

  return (
    <List
      sx={{ width: '100%', maxWidth: 1300, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleCollapsePostsList}>
        <ListItemIcon>
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Posts list" />
        {openPostsCollapse ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openPostsCollapse} timeout="auto" unmountOnExit>
        {posts ? posts.map((post) => <PostTile key={uuidv4()} postToDisplay={post} />) : 'Loading'}
      </Collapse>
    </List>
  );
}
