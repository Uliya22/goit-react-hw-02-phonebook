import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeliteContact }) => {
  return (
    <div className={css.listContainer}>
      <ul className={css.phoneList}>
        {contacts.map(contact => (
          <li className={css.listItem} key={contact.id}>
            <span className={css.listText}>{`${contact.name}${': '}`}</span>
            <span className={css.listText}>{contact.number}</span>
            <button
              type="button"
              className={css.listButton}
              onClick={() => onDeliteContact(contact.id)}
            >
              Delite
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeliteContact: PropTypes.func.isRequired,
};
