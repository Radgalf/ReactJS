import React from 'react';
import styles from './cardlist.css';
import {Card, ICardProps} from "./Card";

const POSTS : ICardProps[] = [
  {
    post:{
      title: "SOME TEXT",
      url:"#SOME_URL",
      author:{
        name:"Дмитрий Гришин",
        avatarUrl: "https://go.skillbox.ru/assets/img/app-logo/skillbox-logo.svg",
        profileLink:"#USER_URL"
      },
      crDate: "2021/02/01 04:05:00"
    },
    previewImageUrl: "https://cdn.dribbble.com/users/24158/screenshots/16620639/media/1a773c001ab1f7cdc54c332b80e95a6a.jpg"
  },
  {
    post:{
      title: "SOME TEXT_TWO",
      url:"#SOME_URL",
      author:{
        name:"Дмитрий Борисов",
        avatarUrl: "https://go.skillbox.ru/assets/img/app-logo/skillbox-logo.svg",
        profileLink:"#USER_URL"
      },
      crDate: "2021/02/01 04:05:00"
    },
    previewImageUrl: "https://cdn.dribbble.com/users/690037/screenshots/16636565/media/cc45a8a4fed78aaf3060c767ecd6e19d.jpg"
  }
]

export function CardList() {
  return (
    <ul className={styles.cardList}>
      {POSTS.map(x=><Card post={x.post} previewImageUrl={x.previewImageUrl}/>)}
    </ul>
  );
}
