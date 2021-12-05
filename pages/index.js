import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { ImageView } from '../components/ImageView'
import { Landing } from '../components/Landing';

export default function Home({ setActiveImage, activeImage}) {

  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Ogden Clark</title>
        <meta name="description" content="Professional portfolio of makeup artist Alex Ogden Clark" />
        <meta name="keywords" content="makeup artist, tv makeup, british makeup artist, glow up, Alex Ogden Clark, television makeup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
         {activeImage ? ( <ImageView activeImage={activeImage} setActiveImage={setActiveImage} /> ) : null}
      
    
        {<Landing />}
      
    </div>
  );
}
