import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const baseUrl = 'https://jsonplaceholder.typicode.com';
const photosUrl = `${baseUrl}/photos`;

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)); //eslint-disable-line
}

export function PhotosList({ userId }) { //eslint-disable-line
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    fetch(`${photosUrl}?albumId=${userId}`)
      .then((response) => response.json())
      .then((photosArray) => setPhotos(photosArray));
  }, [userId]);

  return (
    <ImageList
      sx={{ width: 1500, height: 1450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {photos ? photos.map((photo) => (
        <ImageListItem key={uuidv4()} cols={photo.cols || 1} rows={photo.rows || 1}>
          <img
            src={`${photo.url}?w=164&h=164&fit=crop&auto=format`}
            alt={photo.title}
            loading="lazy"
          />
        </ImageListItem>
      )) : 'Loading'}
    </ImageList>
  );
}
