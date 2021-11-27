import { ImageList, ImageListItem } from '@mui/material';
import { galleryData } from '../data';
import Image from 'next/image';
//import styles from '../styles/Gallery.module.css'

export const Gallery = ({activeGallery, setActiveImage}) => {
  return (
    <div className="gallery">
      <ImageList variant="masonry" cols={3} gap={8}>
        {activeGallery.map((item) => (
          <ImageListItem key={item.imgSrc}>
            <Image
              onClick={() => setActiveImage(item)}
              src={item.imgSrc}
              alt={item.alt}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};
