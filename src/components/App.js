import { FormAddContacts } from "./FormAddContacts/FormAddContacts";
import { ContactsList } from "./ContactsList/ContactList";
import { FilterContacts } from "./FilterContacts/FilterContacts";




export const App = () => {



    return (
      <>
        <h1 className="headlineApp">Телефонна книга</h1>
        
        <FormAddContacts  />
       
        <FilterContacts
        />

        
          <>
        <h2 className="contactListTitle">Контакти</h2>
        <ContactsList />
        </>
        
      </>
    );
  
};