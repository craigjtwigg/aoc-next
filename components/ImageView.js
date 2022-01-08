import React from 'react';
import Image from 'next/image';
import { galleryData } from '../data';
import styles from '../styles/ImageView.module.css';
import { ImageList, ImageListItem } from '@mui/material';
import Link from 'next/link';

export const ImageView = ({ photos, activeImage, setActiveImage }) => {
  let relatedGallery = photos.filter(
    (item) =>
      item.photoset.nodes[0].name ===
        activeImage.photoset.nodes[0].name && item !== activeImage
  );
  return (
    <div className={styles.visible}>
      <div className={styles.activeImageWrapper}>
        <Image
          src={activeImage.image.mediaItemUrl}
          className={styles.activeImage}
          alt={activeImage.photoset.nodes[0].description}
          width={activeImage.image.mediaDetails.width}
          height={activeImage.image.mediaDetails.height}
          layout="intrinsic"
          quality="80"
          placeholder="blur"
          blurDataURL="undefined"
        />
      </div>

      <div className={styles.activeImageDetails}>
        <h2 className={styles.photoset}>
          {activeImage.photoset.nodes[0].name}
        </h2>
        <p className={styles.credit}>{activeImage.photoset.nodes[0].credit}</p>
        <Link href={`/${activeImage.photoset.nodes[0].category[0]}`}>
          <a>
            <span
              className={styles.returnToGallery}
              onClick={() => setActiveImage(undefined)}
            >
              Return to {`${activeImage.photoset.nodes[0].category[0]}`} gallery
            </span>
          </a>
        </Link>
      </div>

      <div className={styles.relatedImages}>
        <ImageList variant="masonry" cols={3} gap={10}>
          {relatedGallery.map((item) => (
            <ImageListItem key={item.image.mediaItemUrl}>
              <div
                className={styles.thumbWrapper}
                key={`thumb${item.image.mediaItemUrl}`}
              >
                <Image
                  src={item.image.mediaItemUrl}
                  className={styles.relatedImagesThumb}
                  key={item.image.mediaItemUrl}
                  alt={item.photoset.nodes[0].description}
                  quality="10"
                  width={item.image.mediaDetails.width}
                  height={item.image.mediaDetails.height}
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
