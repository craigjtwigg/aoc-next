import Head from 'next/head';
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
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />       
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
         {activeImage ? ( <ImageView activeImage={activeImage} setActiveImage={setActiveImage} /> ) : null}
      
    
        {<Landing />}
      
    </div>
  );
}
