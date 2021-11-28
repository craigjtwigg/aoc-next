import { Gallery } from "../components/Gallery"
import { Layout } from "../components/Layout"
import { galleryData } from "../data"
export default function tv({setActiveImage, setMobileNav}) {
    let tvGallery = galleryData.filter((item) => item.category === 'tv')
    return (
       <Layout
        setActiveImage={setActiveImage}
        setMobileNav={setMobileNav}
      >
        {<Gallery activeGallery={tvGallery} setActiveImage={setActiveImage}/>}
      </Layout>
    )
}
