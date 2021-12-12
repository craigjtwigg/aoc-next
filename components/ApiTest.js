import { useState, useEffect } from 'react';
import Image from 'next/image';
import DefaultImage from '../public/assets/celebrity/POLO/polo_01.jpg';

export const ApiTest = () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const [galleryData, setGalleryData] = useState(null);

  useEffect(() => {
    fetch(
      'http://localhost:1337/api/photo-sets?populate[images][fields]=url,width,height',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setGalleryData(result.data);
      })
      .catch((error) => console.log('error', error));
    return () => {};
  }, []);

  return (galleryData ? (
    galleryData.map((album) => {
      let albumName = album.attributes.name;
      let albumDescription = album.attributes.description;
      let albumCredit = album.attributes.credit;
      let albumCategory = album.attributes.albumCategory;
       return (album.attributes.images.data.map((item) => (
        <div key={'http://localhost:1337' + item.attributes.url}>
          <Image
            src={'http://localhost:1337' + item.attributes.url}
            alt={albumDescription}
            width={item.attributes.width}
            height={item.attributes.height}
            layout="responsive"
            data-credit={albumCredit}
            data-category={albumCategory}
            data-photoset={albumName}
            quality='100'
          />
        </div> )
       ) )
    }
    )
  )
  : null
  )
}

