import React from 'react';
import Link from 'next/link';
import { Instagram, Email } from '@mui/icons-material';
import styles from '../styles/Landing.module.css'

export const EmailTab = () => {
  return (
    <Link href="/contact">
      <a>
        <div className={styles.tabContainer}>
          <div className={styles.tabWrapper}>
            <Email />
          </div>
        </div>
      </a>
    </Link>
  );
};

export const InstaTab = () => {
  return (
    <Link href="/contact">
      <a>
        <div className={styles.tabContainer}>
          <div className={styles.tabWrapper}>
            <Instagram/>
          </div>
        </div>
      </a>
    </Link>
  );
};

