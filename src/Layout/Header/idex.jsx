import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../styles.module.css';

export function Header() {
  return (
    <div className={styles.header}>
      <Link to='/'> {/* eslint-disable-line */}
        <p>My app</p>
      </Link>
    </div>
  );
}
