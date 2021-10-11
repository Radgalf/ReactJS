import React from 'react';
import styles from './controlpanel.css';
import {KarmaController} from "./KarmaController";
import {CommentBlock} from "./CommentBlock";
import {ActionShare} from "./ActionShare";
import {ActionSave} from "./ActionSave";

export function ControlPanel() {
  return (
    <div className={styles.controls}>
      <KarmaController/>
      <CommentBlock/>
      <div className={styles.actions}>
        <ActionShare/>
        <ActionSave/>
      </div>
    </div>
  );
}
