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