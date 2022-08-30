import PropTypes from 'prop-types';
import css from './ContactListItem.module.css'

import { useDispatch } from 'react-redux';
import { deleteContact } from 'Redux/phoneBookActions';

export const ContactsListItem = ({ name, number,id }) => {
    const dispatch = useDispatch();
    return (
    
        <li className={css.contactItem} key={id}>
            <p className={css.contactName}>{name} {number} </p>
            <button className={css.deleteBtn} onClick={()=>dispatch(deleteContact(id))}>Delete</button>
        </li>
    )
};

ContactsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}
