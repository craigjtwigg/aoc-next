import React from 'react';
import styles from '../styles/Landing.module.css';
import CelebImg from '../public/assets/celebrity/kiri_pritchard_mcclean_03.jpg';
import EditorialImg from '../public/assets/editorial/NO FUTURE MAGAZINE/no_future_02.jpg';
import FilmAndTVImg from '../public/assets/tv/live_at_aberyswyth_pier_11.jpg';
import CommercialImg from '../public/assets/commercial/oxfam_01.jpg';
import LandingCard from './LandingCard';
import { InstaTab, EmailTab } from './Tab';


export const Landing = (props) => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.subContainer}>
         <h1 className={styles.vertical}>ALEX OGDEN CLARK</h1>
       
<LandingCard link='/editorial' category='Editorial' cardImage={EditorialImg}/>
<LandingCard link='/tv' category='Film and TV' cardImage={FilmAndTVImg}/>
<LandingCard link='celebrity' category='Celebrity' cardImage={CelebImg}/>
<LandingCard link='commercial' category='Commercial' cardImage={CommercialImg}/>
      </div>
 
</div>
<div className={styles.tabs}>
  <EmailTab />
  <InstaTab />
</div>
</>
  )
};
