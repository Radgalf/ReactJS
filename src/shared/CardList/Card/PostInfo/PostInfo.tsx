import React from 'react';
import styles from './postinfo.css';
import {Author} from "../Author";

export function PostInfo() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <Author/>
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            4 часа назад
          </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Test post OneTest post OneTest post OneTest post OneTest post OneTest post OneTest post OneTest post OneTest
          post One
          Test post OneTest post OneTest post OneTest post OneTest post OneTest post OneTest post OneTest post OneTest
          post One
        </a>
      </h2>
    </div>
  );
}
