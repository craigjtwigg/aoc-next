import { Instagram } from '@mui/icons-material';
import Link from 'next/link';
import styles from '../styles/Nav.module.css'

export const Nav = ({setActiveGallery}) => {
  return (
    <nav>
      <ul className={styles.navUl}>
        <li className={styles.linkItem}>
          <p>
            <Link href="/editorial">
            <a>EDITORIAL</a>
            </Link>
          </p>
        </li>
        <li className={styles.linkItem}>
          <p>
            <Link href="/tv">
           <a> FILM & TELEVISION </a>
           </Link>
          </p>
        </li>
        
        <li className={styles.linkItem}>
          <p>
              <Link href="/celebrity">
            <a>CELEBRITY</a>
            </Link>
          </p>
        </li>
        <li className={styles.linkItem}>
          <p>
              <Link href="/commercial">
            <a>COMMERCIAL</a>
            </Link>
          </p>
        </li>
        <li className={styles.linkItem}>
          <p>
              <Link href="/contact">
            <a>CONTACT</a>
            </Link>
          </p>
        </li>
        <li className={styles.linkItem}>
          <Link href="https://www.instagram.com/alexogdenclark/">
           <a> <Instagram /> </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
