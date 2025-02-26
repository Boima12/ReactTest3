import styles from './child1.module.css';

import Co_child2 from '../child2/child2';

function Co_child1() {
    return(
        <div className={styles.main_child1}>

            <Co_child2 />

        </div>
    );
}

export default Co_child1
