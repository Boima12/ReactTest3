import styles from './navibar.module.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Co_navibar() {

    const navigate = useNavigate();

    const dropdownRef = useRef(null);

    const handleMouseEnter = () => {
        if (dropdownRef.current) {
            dropdownRef.current.style.visibility = 'visible';
            dropdownRef.current.style.opacity = '1';
        }
    };

    const handleMouseLeave = () => {
        if (dropdownRef.current) {
            dropdownRef.current.style.visibility = 'hidden';
            dropdownRef.current.style.opacity = '0';
        }
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
                <a href='#'>Tour</a>
                <a href='#'>Contact</a>
                <a href='#' 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                >More</a>

                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className={styles.ic}/>

                <div className={styles.dropdown_more} 
                    ref={dropdownRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <a href="#">Merchandise</a>
                    <a href="#">Extras</a>
                    <a href="#">Media</a>
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
                    <a href='#'>Tour</a>
                    <a href='#'>Contact</a>
                    <a href='#' 
                        onClick={menu_more_open}
                    >More</a>
                </div>

                <div className={[styles.menu_more, styles.menu_collapse_transition].join(' ')} ref={menu_moreRef}>
                    <FontAwesomeIcon icon="fa-solid fa-arrow-left" className={styles.ic}
                        onClick={menu_more_close}
                    />

                    <a href="#">Merchandise</a>
                    <a href="#">Extras</a>
                    <a href="#">Media</a>
                </div>
            </div>

        </div>
    );
}

export default Co_navibar;
