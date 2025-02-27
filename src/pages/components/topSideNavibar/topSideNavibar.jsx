import styles from './topSideNavibar.module.css';
import { useRef } from 'react';
import { useToggleCollapse } from '~/src/utilities/hooks/useToggleCollapse/useToggleCollapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Co_topSideNavibar() {

    // context_top_collapse toggle
    const context_top_collapseRef = useRef();
    const { toggle: triggerContext_top_collapse } = useToggleCollapse(styles, context_top_collapseRef, 500);

    return (
        <div className={styles.main_topSideNavibar}>
            <div className={styles.context_top}>
                <a>Link 1</a>
                <a>Link 2</a>
                <a>Link 3</a>
                <a>Link 4</a>
                <a>Link 5</a>
            </div>
            <div className={styles.context_top_spacer}></div>
         

            <div className={styles.context_top_nav}>
                <FontAwesomeIcon icon="fa-solid fa-bars" className={styles.ic} onClick={triggerContext_top_collapse}/>
            </div>
            <div className={styles.context_top_nav_spacer}></div>


            <div className={styles.context_top_collapse} ref={context_top_collapseRef}>
                <div className={styles.overlay} onClick={triggerContext_top_collapse}></div>

                <div className={styles.context_top}>
                    <div className={styles.heading}>
                        <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic} onClick={triggerContext_top_collapse}/>
                    </div>

                    <a>Link 1</a>
                    <a>Link 2</a>
                    <a>Link 3</a>
                    <a>Link 4</a>
                    <a>Link 5</a>
                </div>
            </div>


            <div className={styles.context_main}>
                <div className={styles.component1}></div>
                <div className={styles.component2}></div>
                <div className={styles.component3}></div>
                <div className={styles.component4}></div>
            </div>

        </div>
    );
}

export default Co_topSideNavibar;