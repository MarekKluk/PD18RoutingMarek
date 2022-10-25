import React from 'react';
import { Tile } from './Tile';
import styles from '../styles.module.css';

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)); //eslint-disable-line
}

export function Board({ tiles, onBoardTileClick }) { //eslint-disable-line
  return (
    <div className={styles.board}>
      {tiles.map((row, rowIndex) => row.map((tileSignValue, columnIndex) => ( //eslint-disable-line
        <Tile
          key={uuidv4()}
          tileSign={tileSignValue}
          onBoardTileClick={() => onBoardTileClick(rowIndex, columnIndex)}
        />
      )))}
    </div>
  );
}
