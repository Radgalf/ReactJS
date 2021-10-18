import React from 'react';
import styles from './menu.css';
import {IDropdownProps} from "../../../DropdownTemplate";
import {noop} from "../../../../utils/react/noop";


export function Menu({children, isOpen, onClose = noop, onOpen = noop}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen)
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen])

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen);
    }
  }
  return (
    <div className={styles.menu}>
      <button className={styles.menuButton} onClick={handleOpen}>
        <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
          <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
          <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
        </svg>
      </button>
      {isDropdownOpen && (
        <div className={styles.dropdown}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            {children}
            <div className={styles.closeButton}>Закрыть</div>
          </div>
        </div>
      )}
    </div>
  );
}
