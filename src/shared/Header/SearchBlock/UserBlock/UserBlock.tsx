import React from 'react';
import styles from './userblock.css';
import {EIcons, Icon} from "../../../Icon";
import {Break} from "../../../Break";
import {EColors, Text} from "../../../Text";

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=yVAbOXZ_u7BWRuwt2WnixQ&response_type=code&state=rrasfdsd&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=identity read submit"

      className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
          : <Icon name={EIcons.iconAnon} size={50}/>
        }
      </div>
      <div className={styles.username}>
        <Break size={12}/>
        <Text size={20} color={username ? EColors.black : EColors.grey99}>{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
