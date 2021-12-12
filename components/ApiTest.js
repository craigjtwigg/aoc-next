import { useState, useEffect } from 'react';
import Image from 'next/image';
import DefaultImage from '../public/assets/celebrity/POLO/polo_01.jpg';

export const ApiTest = () => {
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  const [apiImage, setApiImage] = useState(DefaultImage);
  const [imageWidth, setImageWidth] = useState('500px');
  const [imageHeight, setImageHeight] = useState('500px');
  const [photoSet, setPhotoSet] = useState (null)



  useEffect(() => {
      fetch(
      'http://localhost:1337/api/photo-sets?populate[images][fields]=url,width,height',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let imgData = result.data[0].attributes.images.data
        let imgUrl =
          'http://localhost:1337' +
          result.data[0].attributes.images.data[0].attributes.url;
        let imgWidth =
          result.data[0].attributes.images.data[0].attributes.width;
        let imgHeight =
          result.data[0].attributes.images.data[0].attributes.height;
        imgUrl = imgUrl.toString();
        //imgWidth = imgWidth.toString();
        //imgHeight = imgHeight.toString()
        setImageHeight(imgHeight);
        setImageWidth(imgWidth);
        setApiImage(imgUrl);
        setPhotoSet(imgData)
        //console.log(imgData)
        //console.log(imgUrl);
      })
      .catch((error) => console.log('error', error));
    return () => {};
  });

  return photoSet ? photoSet.map((item) => {
  let itemUrl = 'http://localhost:1337' + item.attributes.url

return    (      <div>
      <Image
        src={itemUrl}
        width={item.attributes.width}
        height={item.attributes.height}
        layout='intrinsic'
        alt="whatever"
        quality='100'
      />
    </div>)
    })

    :
  
  (
    <div>
      <Image
        src={apiImage}
        width={imageWidth}
        height={imageHeight}
        layout='intrinsic'
        alt="whatever"
        quality='100'
      />
    </div>
  );
};
