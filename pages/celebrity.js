import { Layout } from "../components/Layout"
import { Gallery } from "../components/Gallery"
import { galleryData } from "../data"

const celebrity = ({setActiveImage, setMobileNav}) => {
    let celebrityGallery = galleryData.filter((item) => item.category === 'celebrity')
    return (
      <Layout
        setActiveImage={setActiveImage}
        setMobileNav={setMobileNav}
      >
        {<Gallery activeGallery={celebrityGallery} setActiveImage={setActiveImage}/>}
      </Layout>
    )
}

export default celebrity