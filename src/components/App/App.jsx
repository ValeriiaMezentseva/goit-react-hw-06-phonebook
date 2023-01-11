import { Container, Title } from "./App.styled";
import ContactsForm from "../Form";
import ContactsList from "../Contacts";
import Filter from "../Filter";
import { Notify } from "notiflix";
import { addContacts, deleteContacts } from 'redux/slice/sliceContacts';
import { setFilter } from "redux/slice/sliceFilter";
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, openFilter} from 'redux/selectors';



export const App = () => {

  const contacts = useSelector(getContacts); 
  const filter = useSelector(getFilter);
  const isOpenFilter = useSelector(openFilter); 
  const dispatch = useDispatch(); 
 

  const submitHandler = data => {
    dispatch(addContacts(data));
    Notify.success(`${data.name} was successfully added to your contacts`);
  };
    

  const deleteContact = id => {
    dispatch(deleteContacts(id));
  };

  const onChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value))
  }; 

  const getFilteredContacts = () => {
    const normilizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };
  const filtredContacts = getFilteredContacts();


  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsForm addContact={submitHandler}
        contacts={contacts}
        isOpenFilter={isOpenFilter} />
      {isOpenFilter && (<Filter value={filter} onSearch={onChangeFilter} />)}
      <ContactsList contacts={filtredContacts} onDeleteClick={deleteContact} />
    </Container>
  )
};
