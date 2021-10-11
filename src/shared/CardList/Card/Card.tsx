import React from 'react';
import styles from './card.css';
import {PostPreview} from "./PostPreview";
import {Menu} from "./Menu";
import {ControlPanel} from "./ControlPanel";
import {PostInfo} from "./PostInfo";

export function Card() {
  return (
    <li className={styles.card}>
      <PostInfo/>
      <PostPreview/>
      <Menu/>
      <ControlPanel/>
    </li>
  );
}
