import { Layout } from "../components/Layout"
import { Gallery } from "../components/Gallery"
import { galleryData } from "../data"

const commercial = ({activeGallery, setActiveGallery, setActiveImage, setMobileNav}) => {
    let commercialGallery = galleryData.filter((item) => item.category === 'commercial')
    return (
      <Layout
        activeGallery={activeGallery}
        setActiveGallery={setActiveGallery}
        setActiveImage={setActiveImage}
        setMobileNav={setMobileNav}
      >
        {<Gallery activeGallery={commercialGallery} setActiveImage={setActiveImage}/>}
      </Layout>
    )
}

export default commercial