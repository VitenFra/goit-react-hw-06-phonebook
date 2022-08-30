import { ContactsListItem } from "components/ContactsListItem/ContactListItem";
import css from './ContactsList.module.css';
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

export const ContactsList = () => {
    const contacts = useSelector(state => state.items);
    const filter = useSelector(state => state.filter);

    const getFilterContacts = () => {
        return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
    };

    return (
        
        <ul className={css.contactList}>
            {filter === '' ?
                contacts.map(({ name, number, id }) => (
                <ContactsListItem key={id} name={name} number={number} id={id} />
                )) :
                getFilterContacts().map(({ name, id, number }) => 
                    <ContactsListItem key={id} name={name} number={number} id={id} />
                )}
          
        </ul>
    )
};
ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteContact:PropTypes.func.isRequired,
}