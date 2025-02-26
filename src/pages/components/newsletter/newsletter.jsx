import styles from './newsletter.module.css';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useToggleCollapse } from '~/src/utilities/hooks/useToggleCollapse/useToggleCollapse';



function Co_newsletter() {

    const newsletterRef = useRef();
    const { toggle: triggerNewsletter } = useToggleCollapse(styles, newsletterRef, 500);


    return(
        <div className={styles.main_newsletter}>
            <button type="button" onClick={triggerNewsletter}>show newsletter</button>

            <div className={styles.newsletter} ref={newsletterRef}>
                <div className={styles.overlay} onClick={triggerNewsletter}></div>

                <div className={styles.panel}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" className={styles.ic} onClick={triggerNewsletter}/>

                    <div className={styles.panel_body}>
                        <h3>NEWSLETTER</h3>
                        <p>Join our mailing list to receive updates on new arrivals and special offers.</p>

                        <input type="text" placeholder='Enter e-mail'></input>
                        <button type="button" onClick={triggerNewsletter}>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Co_newsletter