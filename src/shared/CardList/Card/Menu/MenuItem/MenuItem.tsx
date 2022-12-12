import React from 'react';
import styles from "./menuitem.css";

interface IMenuItemProps {
  title: string;
  icon?: JSX.Element;
}

export function MenuItem({title, icon}: IMenuItemProps) {
  return (
    <div style={{display:"flex",flexFlow:"column"}}>
      <div className={styles.menuItem}>
        {icon}
        <span>{title}</span>
      </div>
      <div className={styles.divider}/>
    </div>
  );
}
