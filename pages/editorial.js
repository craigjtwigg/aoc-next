import { Gallery } from "../components/Gallery"
import { Layout } from "../components/Layout"
import { galleryData } from "../data"

const editorial = ({setActiveImage, setMobileNav}) => {
    let editorialGallery = galleryData.filter((item) => item.category === 'editorial')
    return (
       <Layout
        setActiveImage={setActiveImage}
        setMobileNav={setMobileNav}
      >
        {<Gallery activeGallery={editorialGallery} setActiveImage={setActiveImage}/>}
      </Layout>
    )
}

export default editorial
