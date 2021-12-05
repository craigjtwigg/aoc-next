import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';
import Link from 'next/link';

export const Gallery = (props) => {

  return (
    <section className={styles.gallery}>
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
                  {console.log(item.imgSrc.naturalHeight)}
                  <Image
                    src={item.imgSrc}
                    alt={item.alt}
                    width={item.imgSrc.naturalWidth}
                    height={item.imgSrc.naturalHeight}
                    layout='responsive'
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
    </section>
  );
};
