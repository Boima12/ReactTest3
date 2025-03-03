import styles from './toggleList.module.css';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useToggleCollapse } from '../../../utilities/hooks/useToggleCollapse/useToggleCollapse';


function Co_toggleList() {

    const menu1_1Ref = useRef();
    const { isOpen: isMenu1_1Open, toggle: triggerMenu1_1 } = useToggleCollapse(styles, menu1_1Ref, 500);

    return(
        <div className={styles.main_toggleList}>

            <ul className={styles.menu1}>
                <li onClick={triggerMenu1_1} style={{background: isMenu1_1Open ? "#e1e1e1" : "initial"}}>
                    <p>toggle menu1_1</p>
                    <FontAwesomeIcon icon="fa-solid fa-caret-right" className={styles.ic} style={{transform: isMenu1_1Open ? "rotate(90deg)" : "none"}}/>                  
                </li>

                <ul className={styles.menu1_1} ref={menu1_1Ref}>
                    <li><p>link 1</p></li>
                    <li><p>link 2</p></li>
                    <li><p>link 3</p></li>
                    <li><p>link 4</p></li>
                    <li><p>link 5</p></li>
                </ul>
            </ul>

        </div>
    );
}

export default Co_toggleList