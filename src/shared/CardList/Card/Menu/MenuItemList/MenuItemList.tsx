import React from 'react';
import styles from './menuitemlist.css';
import {EColors, Text} from '../../../../Text';
import classNames from "classnames";
import {EIcons, Icon} from "../../../../Icon";

interface IMenuItemsListProps {
  postId: string;
}

export function MenuItemList({postId}: IMenuItemsListProps) {
  const onlyDesktopMenuItem = classNames(styles.menuItem, styles.menuItemHideForMobile)
  return (
    <ul className={styles.menuItemsList}>
      <li className={onlyDesktopMenuItem}>
        <Icon name={EIcons.comment}/>
        <Text size={12} color={EColors.grey99}>Комментарии</Text>
      </li>
      <div className={styles.divider}/>

      <li className={onlyDesktopMenuItem}>
        <Icon name={EIcons.share}/>
        <Text size={12} color={EColors.grey99}>Поделиться</Text>
      </li>

      <div className={styles.divider}/>

      <li className={styles.menuItem} onClick={()=> console.log(postId)}>
        <Icon name={EIcons.block}/>
        <Text size={12} color={EColors.grey99}>Скрыть</Text>
      </li>

      <div className={styles.divider}/>

      <li className={onlyDesktopMenuItem}>
        <Icon name={EIcons.save}/>
        <Text size={12} color={EColors.grey99}>Сохранить</Text>
      </li>

      <div className={styles.divider}/>

      <li className={styles.menuItem}>
        <Icon name={EIcons.warning}/>
        <Text size={12} color={EColors.grey99}>Пожаловаться</Text>
      </li>
    </ul>
  );
}
