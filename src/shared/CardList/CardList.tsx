import React from 'react';
import styles from './cardlist.css';
import {Card, ICardProps} from "./Card";
import {postsContext} from "../context/PostsContext";
import moment from "moment";

export function CardList() {
  const posts = React.useContext(postsContext);
  const shortPosts = posts.map(x => {
    let shortPostInfo: ICardProps = {
      id: x.id,
      post: {
        url: "#Post_URL",
        author: {
          name: x.author,
          avatarUrl: "https://www.redditinc.com/assets/images/site/reddit-logo.png",
          profileLink: "#USER_LINK"
        },
        crDate: moment(x.created).format("DD-mm-YYYY HH:mm"),
        title: x.title
      },
      previewImageUrl: !x.thumbnail.includes("http") ? "https://kluban.net/wp-content/uploads/2015/05/blank-thumbnail.jpg" : x.thumbnail
    };
    return shortPostInfo;
  })


  return (
    <ul className={styles.cardList}>
      {shortPosts.map(x => <Card id={x.id} key={x.id} post={x.post} previewImageUrl={x.previewImageUrl}/>)}
    </ul>
  );
}
