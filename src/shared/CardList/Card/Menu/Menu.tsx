import React from 'react';
import styles from './menu.css';
import {Dropdown, IDropdownProps} from "../../../Dropdown";
import {noop} from "../../../../utils/react/noop";
import {EColors, Text} from '../../../Text'
import {MenuItemList} from "./MenuItemList";
import {EIcons, Icon} from "../../../Icon";


export function Menu({children, isOpen, onClose = noop, onOpen = noop}: IDropdownProps) {
  return (
    <div className={styles.menu}>
      <Dropdown button={
        <button className={styles.menuButton}>
          <Icon name={EIcons.menu} size={5}/>
        </button>
      }
      >
        <div className={styles.dropdown}>
          <MenuItemList postId={'1234'}/>
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColors.grey66}>
              Закрыть
            </Text>
          </button>
        </div>
      </Dropdown>
    </div>
  );
}
