import Head from 'next/head';
import { Gallery } from "../components/Gallery"
import { Layout } from "../components/Layout"
import { galleryData } from "../data"

export default function tv({photos, setActiveImage, setMobileNav}) {
    let tvGallery = photos.filter((item) => item.photoset.nodes[0].category[0] === 'tv')
    console.log(tvGallery.length)
    return (
      <>
        <Head>
        <title>Alex Ogden Clark: Film and Television</title>
        <meta name="description" content="Film and Television portfolio of makeup artist Alex Ogden Clark" />
        <meta name="keywords" content="makeup artist, tv makeup, british makeup artist, glow up, Alex Ogden Clark, television makeup" />
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Layout
        setActiveImage={setActiveImage}
        setMobileNav={setMobileNav}
      >
        {<Gallery activeGallery={tvGallery} setActiveImage={setActiveImage}/>}
      </Layout>
      </>
    )
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
  }
}
