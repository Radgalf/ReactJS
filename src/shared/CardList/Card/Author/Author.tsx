import React from 'react';
import styles from './author.css';

export function Author() {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src="https://go.skillbox.ru/assets/img/app-logo/skillbox-logo.svg"
        alt="avatar"/>
      <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
    </div>
  );
}
