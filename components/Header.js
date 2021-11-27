import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { FilterList, Close } from '@mui/icons-material';
import styles from '../styles/Header.module.css'

export const Header = ({setActiveGallery}) => {
  return (
    <div className={styles.header}>
      <Logo />
      <DesktopNav setActiveGallery={setActiveGallery}/>
     
    </div>
  );
};
