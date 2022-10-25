import React from 'react';
import styles from '../../styles.module.css';

export function Tile({ onBoardTileClick, tileSign }) { //eslint-disable-line
  return (
    <button className={styles.square} onClick={onBoardTileClick}> {/* eslint-disable-line */}
      {' '}
      {tileSign}
      {' '}
    </button>
  );
}
