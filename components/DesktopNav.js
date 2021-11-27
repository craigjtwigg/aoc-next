import { Nav } from './Nav';
import styles from '../styles/Nav.module.css'
export const DesktopNav = ({setActiveGallery}) => {
  return (
    <>
      <Nav class={'desktop-nav'} setActiveGallery={setActiveGallery}/>
    </>
  );
};
