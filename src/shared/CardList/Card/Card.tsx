import React from 'react';
import styles from './card.css';
import {PostPreview} from "./PostPreview";
import {Menu} from "./Menu";
import {ControlPanel} from "./ControlPanel";
import {PostInfo, IPostShortInfo} from "./PostInfo";

export interface ICardProps {
  post: IPostShortInfo;
  previewImageUrl: string;
}

export function Card(props: ICardProps) {
  return (
    <li className={styles.card}>
      <PostInfo
        title={props.post.title}
        url={props.post.url}
        author={props.post.author}
        crDate={props.post.crDate}
      />
      <PostPreview
        previewUrl={props.previewImageUrl}
        altText="image preview"
      />
      <Menu/>
      <ControlPanel/>
    </li>
  );
}
