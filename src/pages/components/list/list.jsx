import styles from './list.module.css';
import PropTypes from 'prop-types';


function Co_list({
    itemList = [{id: 1, name: "blank", calories: 1}]
}) {

    const listItems = itemList.map(item => <li key={item.id}>{item.name} - {item.calories}</li>);

    return(
        <div className={styles.main_list}>
            
            <ol>
                {listItems}
            </ol>

        </div>
    );
}


Co_list.propTypes = {
    itemList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
};


export default Co_list