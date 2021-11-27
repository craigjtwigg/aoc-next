import { galleryData } from "../data"
import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import styles from '../styles/Layout.module.css'
import { useState } from "react"



export const Layout = ({children}) => {
    const [activeGallery, setActiveGallery] = useState(galleryData);
  const [activeImage, setActiveImage] = useState(undefined);
  const [MobileNav, setMobileNav] = useState(false);
    return (
        <div className={styles.layout}>
          <Header setActiveGallery={setActiveGallery}/>
          <main className={styles.content}>{React.cloneElement(children, { activeGallery, setActiveImage })}</main>
          <Footer />  
        </div>
    )
}
