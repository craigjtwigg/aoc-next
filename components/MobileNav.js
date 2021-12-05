import { Nav } from './Nav';
import styles from '../styles/Nav.module.css'
import { Close } from '@mui/icons-material';

export const MobileNav = (props, {setDrawerActive, drawerActive}) => {
  return (
    <>
      <Nav drawerActive={drawerActive} class={styles.mobileNav} />
      <Close className={styles.close} onClick={()=> props.setDrawerActive(false)} />
    </>
  );
};
