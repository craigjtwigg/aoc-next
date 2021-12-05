import { Nav } from './Nav';
import styles from '../styles/Nav.module.css'
import { FilterList } from '@mui/icons-material'
export const DesktopNav = ({drawerActive, setDrawerActive, setActiveGallery}) => {
  return (
    <>
      <Nav class={styles.desktopNav} drawerActive={drawerActive} setDrawerActive={setDrawerActive} setActiveGallery={setActiveGallery}/>
      <FilterList
          onClick={() => setDrawerActive(true)}
          className={
           styles.mobileNavBurger
          }
        />
    </>
  );
};
