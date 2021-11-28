import { ImageList, ImageListItem } from '@mui/material';
import { galleryData } from '../data';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';
import Link from 'next/link';

export const Gallery = (props) => {
  return (
    <div className={styles.gallery}>
      <ImageList variant="masonry" cols={3} gap={10}>
        {props.activeGallery.map((item) => (
          <Link href="/" key={`View${item.id}`}>
            <a>
              <ImageListItem key={item.id}>
                <div
                  className={styles.galleryItem}
                  onClick={() => props.setActiveImage(item)}
                  style={{
                    position: 'relative',
                    paddingBottom: '1vw',
                    width: '30vw',
                    height: 'auto',
                  }}
                >
                  <Image
                    src={item.imgSrc}
                    alt={item.alt}
                    objectFit="contain"
                    quality="80"
                    placeholder="blur"
                    blurDataURL={item.blurSrc ? item.blurSrc : undefined}
                  />
                </div>
              </ImageListItem>
            </a>
          </Link>
        ))}
      </ImageList>
    </div>
  );
};
