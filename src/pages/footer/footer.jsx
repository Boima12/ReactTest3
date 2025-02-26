import styles from './footer.module.css';
import { forwardRef } from 'react';


const Co_footer = forwardRef((props, ref) => {

    return(
        <div className={styles.main_footer} ref={ref}>

            <p>This is a footer</p>

        </div>
    );
});

Co_footer.displayName = "Co_footer";

export default Co_footer