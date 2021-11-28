import { galleryData } from '../data';
import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ImageView } from './ImageView';
import { GalleryItem } from './GalleryItem';
import styles from '../styles/Layout.module.css';
import { useState } from 'react';

export const Layout = ( {activeImage, setActiveImage, children }) => {

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.content}>
        {React.cloneElement(children, { activeImage, setActiveImage })}
      </main>
      <Footer />
    </div>
  )}
