import { PropTypes } from 'prop-types';
import { ListWrap, ButtonWrap, ItemWrap } from './ContactList.styled';


export const ContactList = ({ contacts, onDelete }) => {
  
  return (
    <ListWrap>
      {contacts.map(contact => (
        <ItemWrap key={contact.id}>
          <p>{contact.name}:</p> <p>{contact.number}</p>
          <ButtonWrap type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </ButtonWrap>
        </ItemWrap>
      ))}
    </ListWrap>
  );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
          }).isRequired),
    onDelete:PropTypes.func.isRequired,
};