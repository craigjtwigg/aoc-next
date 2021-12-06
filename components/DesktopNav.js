import { Nav } from './Nav';
import styles from '../styles/Nav.module.css'
import { FilterList } from '@mui/icons-material'
export const DesktopNav = ({drawerActive, setDrawerActive, setActiveGallery}) => {
  return (
    <>
      <Nav class={styles.desktopNav} drawerActive={drawerActive} setDrawerActive={setDrawerActive} setActiveGallery={setActiveGallery}/>
      <div className={styles.mobileNavBurger}>
              <FilterList
          onClick={() => setDrawerActive(true)}
        />
      </div>

    </>
  );
};
