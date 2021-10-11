import React from 'react';
import styles from './PostPreview.css';

export function PostPreview() {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/users/24158/screenshots/16620639/media/1a773c001ab1f7cdc54c332b80e95a6a.jpg"
        alt=""/>
    </div>
  );
}
