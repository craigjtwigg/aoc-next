import { Layout } from "../components/Layout"
import { Gallery } from "../components/Gallery"
import { galleryData } from "../data"

const celebrity = ({activeGallery, setActiveGallery, setActiveImage, setMobileNav}) => {
    let celebrityGallery = galleryData.filter((item) => item.category === 'celebrity')
    return (
      <Layout
        activeGallery={activeGallery}
        setActiveGallery={setActiveGallery}
        setActiveImage={setActiveImage}
        setMobileNav={setMobileNav}
      >
        {<Gallery activeGallery={celebrityGallery} setActiveImage={setActiveImage}/>}
      </Layout>
    )
}

export default celebrity