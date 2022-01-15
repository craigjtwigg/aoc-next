import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ImageView } from '../components/ImageView'
import { Landing } from '../components/Landing';

export default function Home({ photos, setActiveImage, activeImage}) {

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
      
         {activeImage ? ( <ImageView photos = {photos} activeImage={activeImage} setActiveImage={setActiveImage} /> ) : null}
      
    
        {<Landing />}
      
    </div>
  );
}

export async function getStaticProps() {
  

  const res = await fetch('https://aoc-wp.onrender.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({
      query: `
        {
          photos(first: 5000) {
            nodes {
              ...PhotoFields
            }
          }
        }

        fragment PhotoFields on Photo {
          image {
            mediaItemUrl
            mediaDetails {
              height
              width
            }
          }
          photoset {
            nodes {
              category
              description
              name
              credit
            }
          }
        }

      `
    })
  })

  const json = await res.json()

  return {
    props: {
      photos: json.data.photos.nodes,
    },
    revalidate: 1,
  }
}
