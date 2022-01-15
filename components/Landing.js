import React from 'react';
import styles from '../styles/Landing.module.css';
import CelebImg from '../public/assets/desktopbanners/celeb.png'
import EditorialImg from '../public/assets/desktopbanners/editorial.png';
import FilmAndTVImg from '../public/assets/desktopbanners/tv.png';
import CommercialImg from '../public/assets/desktopbanners/commercial.png';

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
<LandingCard link='commercial' category='Commercial'  cardImage={CommercialImg}/>
      </div>
 
</div>
<div className={styles.tabs}>
  <EmailTab />
  <InstaTab />
</div>
</>
  )
};
