import Head from "next/head"
import { Layout } from "../components/Layout"
import { Gallery } from "../components/Gallery"
import { galleryData } from "../data"

const commercial = ({setActiveImage, setMobileNav}) => {
    let commercialGallery = galleryData.filter((item) => item.category === 'commercial')
    return (
      <>
              <Head>
        <title>Alex Ogden Clark: Commercial</title>
        <meta name="description" content="Commercial portfolio of makeup artist Alex Ogden Clark" />
        <meta name="keywords" content="makeup artist, commercial makeup, british makeup artist, glow up, Alex Ogden Clark, e-commerce makeup" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        setActiveImage={setActiveImage}
        setMobileNav={setMobileNav}
      >
        {<Gallery activeGallery={commercialGallery} setActiveImage={setActiveImage}/>}
      </Layout>
      </>
    )
    
}

export default commercial