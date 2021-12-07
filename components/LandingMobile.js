import React from 'react';
import styles from '../styles/Landing.module.css';
import CelebImg from '../public/assets/mobilebanners/celeb.jpg';
import EditorialImg from '../public/assets/mobilebanners/editorial.jpg';
import FilmAndTVImg from '../public/assets/mobilebanners/tv.jpg';
import CommercialImgMobile from '../public/assets/mobilebanners/commercial.jpg'
import CommercialImg from '../public/assets/mobilebanners/commercial.jpg';
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
<div className={styles.tabsMobile}>
  <EmailTab />
  <InstaTab />
</div>

</>
  )
};

export default LandingMobile
