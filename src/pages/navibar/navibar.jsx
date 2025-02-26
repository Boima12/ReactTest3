import styles from './navibar.module.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Co_navibar() {

    const navigate = useNavigate();

    // show/hide dropdown_more
    const dropdownRef = useRef();
    const dropdown_more_enter = () => {
        dropdownRef.current.classList.add(styles.dropdown_more_visible);
    };
    const dropdown_more_leave = () => {
        dropdownRef.current.classList.remove(styles.dropdown_more_visible);
    };

    // open/close menu_collapse
    const menu_collapseRef = useRef();
    const menu_collapse_open = () => {
        menu_collapseRef.current.classList.add(styles.menu_collapse_transition_open);
    };
    const menu_collapse_close = () => {
        menu_collapseRef.current.classList.remove(styles.menu_collapse_transition_open);
    };

    // open/close menu_more
    const menu_moreRef = useRef();
    const menu_more_open = () => {
        menu_moreRef.current.classList.add(styles.menu_collapse_transition_open);
    };
    const menu_more_close = () => {
        menu_moreRef.current.classList.remove(styles.menu_collapse_transition_open);
    };


    return (
        <div className={styles.main_navibar}>

            <div className={styles.normal}>
                <a onClick={() => navigate('/pages/ground1')}>Page1</a>
                <a onClick={() => navigate('/pages/ground2')}>Page2</a>
                <a href='#' 
                    onMouseEnter={dropdown_more_enter} 
                    onMouseLeave={dropdown_more_leave}
                >More</a>

                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className={styles.ic}/>

                <div className={styles.dropdown_more} 
                    ref={dropdownRef}
                    onMouseEnter={dropdown_more_enter}
                    onMouseLeave={dropdown_more_leave}
                >
                    <a href="#">Dropdown item 1</a>
                    <a href="#">Dropdown item 2</a>
                    <a href="#">Dropdown item 3</a>
                </div>
            </div>

            <div className={styles.collapse}>
                <FontAwesomeIcon icon="fa-solid fa-bars" className={styles.ic}
                    onClick={menu_collapse_open}
                />
                    
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className={styles.ic}/>

                <div className={[styles.menu_collapse, styles.menu_collapse_transition].join(' ')} ref={menu_collapseRef}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic}
                        onClick={menu_collapse_close}
                    />

                    <a onClick={() => navigate('/pages/ground1')}>Page1</a>
                    <a onClick={() => navigate('/pages/ground2')}>Page2</a>
                    <a href='#' 
                        onClick={menu_more_open}
                    >More</a>
                </div>

                <div className={[styles.menu_more, styles.menu_collapse_transition].join(' ')} ref={menu_moreRef}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" className={styles.ic}
                        onClick={menu_more_close}
                    />

                    <a href="#">Dropdown item 1</a>
                    <a href="#">Dropdown item 2</a>
                    <a href="#">Dropdown item 3</a>
                </div>
            </div>

        </div>
    );
}

export default Co_navibar;
