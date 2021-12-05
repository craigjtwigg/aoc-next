import React from 'react';
import styles from '../styles/Landing.module.css';
import CelebImg from '../public/assets/celebrity/kiri_pritchard_mcclean_03.jpg';
import EditorialImg from '../public/assets/editorial/NO FUTURE MAGAZINE/no_future_02.jpg';
import FilmAndTVImg from '../public/assets/tv/live_at_aberyswyth_pier_11.jpg';
import CommercialImg from '../public/assets/commercial/oxfam_01.jpg';
import CommercialImgMobile from '../public/assets/commercial/KOI FOOTWEAR/koi_footwear_02.jpg'
import LandingCard from './LandingCard';
import LandingMobile from './LandingMobile';
import { InstaTab, EmailTab } from './Tab';


export const Landing = (props) => {
  return (
    <>
    <LandingMobile />
    <div className={styles.container}>
      <div className={styles.subContainer}>
         <h1 className={styles.vertical}>ALEX OGDEN CLARK</h1>
       
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
