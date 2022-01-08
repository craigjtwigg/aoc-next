import Head from 'next/head'
import { Layout } from "../components/Layout"
import { Gallery } from "../components/Gallery"
import { galleryData } from "../data"

const celebrity = ({photos, setActiveImage, setMobileNav}) => {
    let celebrityGallery = photos.filter((item) => item.photoset.nodes[0].category[0] === 'celebrity')
    return (
      <>
                    <Head>
        <title>Alex Ogden Clark: Celebrity</title>
        <meta name="description" content="Celebrity portfolio of makeup artist Alex Ogden Clark" />
        <meta name="keywords" content="makeup artist, celebrity makeup, musician makeup, music video makeup, live music makeup, british makeup artist, glow up, Alex Ogden Clark" />
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
        {<Gallery activeGallery={celebrityGallery} setActiveImage={setActiveImage}/>}
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

export default celebrity