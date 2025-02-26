import styles from './child2.module.css';
import { useRef, useEffect } from 'react';
import { useBoxAlpha } from '../../storage/boxAlpha';


function Co_child2() {

    // store main_child2 into Zustand boxAlpha.js
    const setChild2Ref = useBoxAlpha((state) => state.setChild2Ref);
    const child2Ref = useRef();
    useEffect(() => {
        if (child2Ref) {
            setChild2Ref(child2Ref);
        }
    }, [setChild2Ref]);

    
    return(
        <div className={styles.main_child2} ref={child2Ref}>

            <h2>Section II</h2>

        </div>
    );
}

export default Co_child2