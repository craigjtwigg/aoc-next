import Head from 'next/head'
import { Layout } from "../components/Layout"
import { Gallery } from "../components/Gallery"
import { galleryData } from "../data"

const celebrity = ({setActiveImage, setMobileNav}) => {
    let celebrityGallery = galleryData.filter((item) => item.category === 'celebrity')
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

export default celebrity