import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { ImageView } from '../components/ImageView'
import { Layout } from '../components/Layout';
import { Landing } from '../components/Landing';
import { useState } from 'react';

import { galleryData } from '../data';

export default function Home({ setActiveImage, activeImage}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Lets Go!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
         {activeImage ? ( <ImageView activeImage={activeImage} setActiveImage={setActiveImage} /> ) : <p>no</p>}
      
      <Layout
        activeImage={activeImage}
        setActiveImage={setActiveImage}
        //setMobileNav={setMobileNav}
      >
        {<Landing />}
      </Layout>
    </div>
  );
}
