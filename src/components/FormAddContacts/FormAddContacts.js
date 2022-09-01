
import css from './FormAddContact.module.css';
import { useSelector,useDispatch } from "react-redux";
import { addContact } from "Redux/phoneBookActions";
import shortid from 'shortid';







export const FormAddContacts = ({onSubmit}) => {
  
    const hendleSubmit = e => {
      e.preventDefault();
      const name = e.currentTarget.elements.name.value;
      const number = e.currentTarget.elements.number.value;
      formSubmitHandler({name, number});
    };


    
    const formSubmitHandler = data => {
      
      if (contacts.find(contact => data.name.toLowerCase() === contact.name.toLowerCase())){
        alert(data.name + ' вже є в контактах!' )
        
      }
      else {
        dispath(addContact({ name:data.name, number:data.number, id: shortid() }))
        
      }
    };












    const dispath = useDispatch();
    const contacts = useSelector(state => state.items);
    
  return (
            <>
            <form  className = {css.formAddContact} onSubmit={hendleSubmit}> 
          <label className={css.formInputTitle}>
          Ім'я 
            <input
            className={css.formInput}
              type="text"
              name="name"
              required={true}
              
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Назва може містити лише літери, апостроф, тире та пробіли. Наприклад Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                
                  />
          </label>
           <label className={css.formInputTitle}>
           Номер
            <input
            className={css.formInput}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та може починатися з +"
                required
            />
          </label>
          
          <button  className ={css.addBtn} type="submit">Додати+</button>
        </form></>
        )
    
};

