
import shortid from 'shortid';
import { FormAddContacts } from "./FormAddContacts/FormAddContacts";
import { ContactsList } from "./ContactsList/ContactList";
import { FilterContacts } from "./FilterContacts/FilterContacts";
import { useSelector,useDispatch } from "react-redux";
import { addContact } from "Redux/phoneBookActions";




export const App = () => {

  const dispath = useDispatch();
  const contacts = useSelector(state => state.items);
  


  const formSubmitHandler = data => {
    
    if (contacts.find(contact => (data.name.toLowerCase() === contact.name.toLowerCase()))){
      alert(data.name + ' вже є в контактах' )
    }
    else {
      dispath(addContact({ name:data.name, number:data.number, id: shortid() }))
      console.log(contacts)
      
    }
  };

    return (
      <>
        <h1 className="headlineApp">Телефонна книга</h1>
        
        <FormAddContacts  onSubmit={formSubmitHandler}/>
       
        <FilterContacts
        />

        {contacts.length > 0 &&
          <>
        <h2 className="contactListTitle">Контакти</h2>
        <ContactsList />
        </>
        }
      </>
    );
  
};