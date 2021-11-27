import { Layout } from "../components/Layout"
import { Gallery } from "../components/Gallery"
import { galleryData } from "../data"

const commercial = ({setActiveImage, setMobileNav}) => {
    let commercialGallery = galleryData.filter((item) => item.category === 'commercial')
    return (
      <Layout
        setActiveImage={setActiveImage}
        setMobileNav={setMobileNav}
      >
        {<Gallery activeGallery={commercialGallery} setActiveImage={setActiveImage}/>}
      </Layout>
    )
}

export default commercial