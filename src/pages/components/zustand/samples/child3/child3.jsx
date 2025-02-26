import styles from './child3.module.css';
import { useRef, useEffect } from 'react';
import { useBoxAlpha } from '../../storage/boxAlpha';


function Co_child3() {

    // store main_child3 into Zustand boxAlpha.js
    const setChild3Ref = useBoxAlpha((state) => state.setChild3Ref);
    const child3Ref = useRef();
    useEffect(() => {
        if (child3Ref) {
            setChild3Ref(child3Ref);
        }
    }, [setChild3Ref]);


    return(
        <div className={styles.main_child3} ref={child3Ref}>

            <h2>Section III</h2>

        </div>
    );
}

export default Co_child3