import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import styles from '../styles/Layout.module.css';
import { useState } from 'react';
import { MobileNav } from './MobileNav';

export const Layout = ({ activeImage, setActiveImage, children }) => {
  const [drawerActive, setDrawerActive] = useState(false);
  return (
    <>
      {drawerActive ? (
        <MobileNav
          drawerActive={drawerActive}
          setDrawerActive={setDrawerActive}
        />
      ) : (
        <div className={styles.layout}>
          <Header
            drawerActive={drawerActive}
            setDrawerActive={setDrawerActive}
          />
          <main className={styles.content}>
            {React.cloneElement(children, {
              drawerActive,
              activeImage,
              setActiveImage,
            })}
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};
