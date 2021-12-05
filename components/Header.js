import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { FilterList, Close } from '@mui/icons-material';
import styles from '../styles/Header.module.css'

export const Header = ({drawerActive, setDrawerActive, setActiveGallery}) => {
  return (
    <div className={styles.header}>
      <Logo orientation='horizontal'/>
      <DesktopNav drawerActive={drawerActive} setDrawerActive={setDrawerActive} setActiveGallery={setActiveGallery}/>
     
    </div>
  );
};
