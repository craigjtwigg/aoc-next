import { ImageList, ImageListItem } from '@mui/material';
import Image from 'next/image';
import styles from '../styles/Gallery.module.css';
import Link from 'next/link';

export const Gallery = (props) => {

  return (
    <section className={styles.gallery}>
      <ImageList variant="masonry" cols={3} gap={10}>
        {props.activeGallery.map((item) => (
          <Link href="/" key={`View${item.image.mediaItemUrl}`}>
            <a>
              <ImageListItem key={item.image.mediaItemUrl}>
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
                    src={item.image.mediaItemUrl}
                    alt={item.photoset.nodes[0].description}
                    width={item.image.mediaDetails.width}
                    height={item.image.mediaDetails.height}
                    layout='intrinsic'
                    quality="80"
                    placeholder="blur"
                    blurDataURL= 'undefined'
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
