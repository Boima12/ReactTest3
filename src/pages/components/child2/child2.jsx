import styles from './child2.module.css';
import { useContext } from 'react';
import { themeContext } from '../../ground1/ground1';

function Co_child2() {

    const { theme, toggleTheme } = useContext(themeContext);

    return(
        <div className={styles.main_child2} style={{backgroundColor: theme === "light" ? "#fff" : "#808080",}}>

            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "dark" : "light"} Theme
            </button>

        </div>
    );
}

export default Co_child2
