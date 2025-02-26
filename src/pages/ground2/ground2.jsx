import styles from './ground2.module.css';
import { Link } from 'react-router-dom';


function Co_ground2() {

    return(
        <div className={styles.main}>

            <p>This is ground 2</p>

            <Link to="/pages/ground1">
                <button type='button'>Go to ground 1</button>
            </Link>

        </div>
    );
}


export default Co_ground2