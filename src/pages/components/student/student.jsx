import PropTypes from 'prop-types';
import styles from './Student.module.css';

function Co_Student({
    name = "Guest", 
    age = 0, 
    isStudent = false
}) {
    return (
        <div className={styles.main}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>isStudent: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// propTypes
Co_Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

export default Co_Student;
