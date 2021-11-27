import { galleryData } from "../data"
import React from "react"
import { Header } from "./Header"
import { Footer } from "./Footer"
import styles from '../styles/Layout.module.css'
import { useState } from "react"



export const Layout = ({children}) => {
  const [activeImage, setActiveImage] = useState(undefined);
  const [MobileNav, setMobileNav] = useState(false);
    return (
        <div className={styles.layout}>
          <Header />
          <main className={styles.content}>{React.cloneElement(children, { setActiveImage })}</main>
          <Footer />  
        </div>
    )
}
