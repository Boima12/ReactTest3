import styles from './child1.module.css';
import { useBoxAlpha } from '../../storage/boxAlpha';


function Co_child1() {

    // get child2Ref and child3Ref from Zustand boxAlpha.js
    const child2Ref = useBoxAlpha((state) => state.child2Ref);
    const child3Ref = useBoxAlpha((state) => state.child3Ref);

    const scrollToChild2Ref = () => {
        if (child2Ref.current) {
            child2Ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToChild3Ref = () => {
        if (child3Ref.current) {
            child3Ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };


    return(
        <div className={styles.main_child1}>

            <h2>Section I</h2>
            <button type="button" onClick={scrollToChild2Ref}>go to section II</button>
            <button type="button" onClick={scrollToChild3Ref}>go to section III</button>

        </div>
    );
}

export default Co_child1