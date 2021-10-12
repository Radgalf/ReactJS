import React from 'react';
import styles from './postinfo.css';
import {Author, IUserInfo} from "../Author";

export interface IPostShortInfo{
  title: string;
  url: string;
  author: IUserInfo;
  crDate: string;
}



export function PostInfo(props: IPostShortInfo) {

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <Author name={props.author.name} avatarUrl={props.author.avatarUrl} profileLink={props.author.profileLink}/>
        <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>опубликовано </span>
            {props.crDate}
          </span>
      </div>
      <h2 className={styles.title}>
        <a href={props.url} className={styles.postLink}>
          {props.title}
        </a>
      </h2>
    </div>
  );
}
