import React from 'react'
import Image from 'next/dist/client/image'
import styles from '../styles/Landing.module.css'
import Link from 'next/link'

const LandingCard = (props) => {
    return (
        <Link href={props.link}>
            <a className={styles.cardLink}>
                   <div className={styles.card}>
      <div className={styles.titleWrap}>
        <h2 className={styles.title}>{props.category}</h2>
      </div>
      
      <div className={styles.imageWrap}>
      <Image
        src={props.cardImage}
        alt={`${props.category} work`}
        layout='fill'
        objectFit='cover'
        quality="100"
        placeholder="blur"
        className={styles.cardImage}
      />
      </div>
    </div>
            </a>
        </Link>
      
    )
}

export default LandingCard