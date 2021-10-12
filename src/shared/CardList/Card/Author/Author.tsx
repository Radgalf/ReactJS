import React from 'react';
import styles from './author.css';

export interface IUserInfo{
  name: string;
  avatarUrl: string;
  profileLink: string;
}
export function Author( props: IUserInfo) {
  return (
    <div className={styles.userLink}>
      <img
        className={styles.avatar}
        src={props.avatarUrl}
        alt="avatar"/>
      <a href={props.profileLink} className={styles.username}>{props.name}</a>
    </div>
  );
}
