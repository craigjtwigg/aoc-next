import { useState, useEffect } from 'react';
import Image from 'next/image';
import DefaultImage from '../public/assets/celebrity/POLO/polo_01.jpg';

export const ApiTest = ({cmsData}) => {


  return (cmsData ? (
    cmsData.map((album) => {
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
            layout="intrinsic"
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

