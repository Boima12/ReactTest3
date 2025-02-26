import styles from './parent.module.css';

import Co_child1 from '../child1/child1';
import Co_child2 from '../child2/child2';
import Co_child3 from '../child3/child3';


function Co_parent() {
    return(
        <div className={styles.main_parent}>

            <Co_child1 />
            <Co_child2 />
            <Co_child3 />

        </div>
    );
}

export default Co_parent