import Head from "next/head"
import { Gallery } from "../components/Gallery"
import { Layout } from "../components/Layout"
import { galleryData } from "../data"

const editorial = ({setActiveImage, setMobileNav}) => {
    let editorialGallery = galleryData.filter((item) => item.category === 'editorial')
    return (
      <>
              <Head>
        <title>Alex Ogden Clark: Editorial</title>
        <meta name="description" content="Editorial portfolio of makeup artist Alex Ogden Clark" />
        <meta name="keywords" content="makeup artist, editorial makeup, british makeup artist, vogue italia, king kong magazine,  Alex Ogden Clark, editorial makeup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Layout
        setActiveImage={setActiveImage}
        setMobileNav={setMobileNav}
      >
        {<Gallery activeGallery={editorialGallery} setActiveImage={setActiveImage}/>}
      </Layout>
      </>
    )
}

export default editorial
