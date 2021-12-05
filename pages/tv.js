import Head from 'next/head';
import { Gallery } from "../components/Gallery"
import { Layout } from "../components/Layout"
import { galleryData } from "../data"
export default function tv({setActiveImage, setMobileNav}) {
    let tvGallery = galleryData.filter((item) => item.category === 'tv')
    return (
      <>
        <Head>
        <title>Alex Ogden Clark: Film and Television</title>
        <meta name="description" content="Film and Television portfolio of makeup artist Alex Ogden Clark" />
        <meta name="keywords" content="makeup artist, tv makeup, british makeup artist, glow up, Alex Ogden Clark, television makeup" />
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
