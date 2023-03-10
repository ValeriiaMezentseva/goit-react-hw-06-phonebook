import PropTypes from 'prop-types';
import { TiDeleteOutline } from 'react-icons/ti';
import { ItemUser, UserIcon, ContactList, ContactsButton, ContactsTitle, ContactsContainer } from './Contacts.styled';




const ContactsList = ({ contacts, onDeleteClick }) => {
    return (
        <ContactsContainer>
            <ContactsTitle> Contacts </ContactsTitle>
            {contacts.length > 0 ? (
                <ContactList>
                    {contacts.map(({ id, name, number }) => (
                        <ItemUser key={id}> 
                            <UserIcon /> {name}: {number}
                            <ContactsButton onClick={() => onDeleteClick(id)}><TiDeleteOutline/></ContactsButton>
                            </ItemUser>
                    ))}
                </ContactList>
            ) : (
            <p>There is no contacts</p>
            )}
        </ContactsContainer>
    );
};

export default ContactsList; 

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    })),
    onDeleteClick: PropTypes.func.isRequired,
};