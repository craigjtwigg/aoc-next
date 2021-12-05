import React from 'react';
import styles from '../styles/Landing.module.css';
import CelebImg from '../public/assets/celebrity/kiri_pritchard_mcclean_03.jpg';
import EditorialImg from '../public/assets/editorial/NO FUTURE MAGAZINE/no_future_02.jpg';
import FilmAndTVImg from '../public/assets/tv/live_at_aberyswyth_pier_11.jpg';
import CommercialImgMobile from '../public/assets/commercial/KOI FOOTWEAR/koi_footwear_01.jpg'
import CommercialImg from '../public/assets/commercial/oxfam_01.jpg';
import LandingCard from './LandingCard';
import { InstaTab, EmailTab } from './Tab';


const LandingMobile = (props) => {
  return (
    <>
    <div className={styles.containerMobile}>
      <div className={styles.subContainerMobile}>
         <h1 className={styles.nameMobile}>ALEX OGDEN CLARK</h1>
       
<LandingCard link='/editorial' category='Editorial' mobileImage ={EditorialImg} cardImage={EditorialImg}/>
<LandingCard link='/tv' category='Film and TV' mobileImage ={FilmAndTVImg} cardImage={FilmAndTVImg}/>
<LandingCard link='celebrity' category='Celebrity' mobileImage ={CelebImg} cardImage={CelebImg}/>
<LandingCard link='commercial' category='Commercial' mobileImage={CommercialImgMobile} cardImage={CommercialImg}/>
      </div>
 
</div>
<div className={styles.tabs}>
  <EmailTab />
  <InstaTab />
</div>

</>
  )
};

export default LandingMobile
