import { useState } from 'react'
import '../styles/globals.css'
import { galleryData } from '../data'

function MyApp({ Component, pageProps }) {
  const [activeImage, setActiveImage] = useState(undefined)
  return <Component {...pageProps} activeImage={activeImage} setActiveImage={setActiveImage} />
}

export default MyApp
