import React from 'react';
import styles from './cardlist.css';
import {Card, ICardProps} from "./Card";
import {generateId} from "../../utils/react/generateRandomIndex";

const POSTS: ICardProps[] = [
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
  }
].map(generateId)

export function CardList() {
  return (
    <ul className={styles.cardList}>
      {POSTS.map(x=><Card id={x.id} key={x.id} post={x.post} previewImageUrl={x.previewImageUrl}/>)}
    </ul>
  );
}
