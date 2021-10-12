import React from 'react';
import styles from './PostPreview.css';

interface IPreviewImg {
  previewUrl: string;
  altText?: string;
}

export function PostPreview({altText, previewUrl}: IPreviewImg) {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={previewUrl}
        alt={altText?altText:"preview image"}/>
    </div>
  );
}
