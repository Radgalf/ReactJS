import {hot} from 'react-hot-loader/root'
import * as React from 'react';
import styles from './header.less';


function HeaderComponent() {
    return (
        <div>
            <h1 className={styles.example}>Hello React</h1>
        </div>
    );
}

export const Header = hot(HeaderComponent);