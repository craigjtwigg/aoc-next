import { useState } from 'react'
import '../styles/globals.css'
import { galleryData } from '../data'

function MyApp({ data, Component, pageProps }) {
  const [activeImage, setActiveImage] = useState(undefined)
  return <Component {...pageProps} cmsData={data} activeImage={activeImage} setActiveImage={setActiveImage} />
}





export default MyApp
