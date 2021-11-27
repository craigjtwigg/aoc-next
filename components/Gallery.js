import { ImageList, ImageListItem } from '@mui/material';
import { galleryData } from '../data';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css'

export const Gallery = (props) => {
  return (
    <div className={styles.gallery}>
      <ImageList variant="masonry" cols={3} gap={10}>
        {props.activeGallery.map((item) => (
          <ImageListItem key={item.imgSrc}>
              <div style={{ position: 'relative', paddingBottom: '1vw', width: '30vw', height: 'auto' }}>
            <Image
             // onClick={() => setActiveImage(item)}
              src={item.imgSrc}
              alt={item.alt}
              objectFit="contain"
              quality='40'
              placeholder="blur"
              blurDataURL={item.blurSrc ? item.blurSrc : undefined}
            />
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
