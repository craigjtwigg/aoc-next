import React from 'react';
import Image from 'next/image';
import { galleryData } from '../data';
import styles from '../styles/ImageView.module.css';
import { ImageList, ImageListItem } from '@mui/material';
import Link from 'next/link'

export const ImageView = ({ activeImage, setActiveImage }) => {
  let relatedGallery = galleryData.filter(
    (item) => item.photoSet === activeImage.photoSet && item !== activeImage
  );
  return (
    <div className={styles.visible}>
      <div className={styles.activeImageWrapper}>
        <Image
          src={activeImage.imgSrc}
          className={styles.activeImage}
          alt={activeImage.alt}
          unoptimized='true'
        />
      </div>

      <div className={styles.activeImageDetails}>
        <h2 className={styles.photoset}>{activeImage.photoSet}</h2>
        <p className={styles.credit}>{activeImage.credit}</p>
        <Link href={`/${activeImage.category}`}><a>
        <span className={styles.returnToGallery} onClick={()=> setActiveImage(undefined)}>Return to {`${activeImage.category}`} gallery</span></a></Link>
      </div>

      <div className={styles.relatedImages}>
        <ImageList variant="masonry" cols={3} gap={10}>
          {relatedGallery.map((item) => (
            <ImageListItem key={item.id}>
              <div className={styles.thumbWrapper} key={`thumb${item.id}`}>
                <Image
                  src={item.imgSrc}
                  className={styles.relatedImagesThumb}
                  key={item.id}
                  alt={item.alt}
                  quality="10"
                  onClick={() => setActiveImage(item)}
                  objectFit="contain"
                />
              </div>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
};
