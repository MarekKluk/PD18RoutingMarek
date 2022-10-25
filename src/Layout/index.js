import React from 'react';
import { NavigationBar } from './Navigation';
import styles from '../styles.module.css';
import { Header } from './Header/idex';

export function Layout({ children }) { //eslint-disable-line
  return (
    <div className={styles.layout}> {/* eslint-disable-line */}
      <Header />
      <div className={styles.navigationAndChildrenWrapper}>
        <NavigationBar />
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
