import { Instagram, EmailOutlined } from '@mui/icons-material';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';


export const Nav = (props, { drawerActive, setDrawerActive }) => {
  return (
    <div className={styles.navWrapper}>
      <nav className={props.class}>
        <ul className={styles.navUl}>
          <li>
            <p>
              <Link href="/editorial">
                <a className={styles.linkItem}>EDITORIAL</a>
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link href="/tv">
                <a className={styles.linkItem}> FILM & TELEVISION </a>
              </Link>
            </p>
          </li>

          <li>
            <p>
              <Link href="/celebrity">
                <a className={styles.linkItem}>CELEBRITY</a>
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link href="/commercial">
                <a className={styles.linkItem}>COMMERCIAL</a>
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link href="/contact">
                <a className={styles.linkItemIcon}>
                  {' '}
                  <EmailOutlined />{' '}
                </a>
              </Link>
            </p>
          </li>
          <li>
            <Link href="https://www.instagram.com/alexogdenclark/">
              <a className={styles.linkItemIcon}>
                {' '}
                <Instagram />{' '}
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    
        
      
    </div>
  );
};
