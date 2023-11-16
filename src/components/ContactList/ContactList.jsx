import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { delContact, getPhoneBookValue } from 'redux/phoneBookSlice';
import { ContactItemStyle, ContactListStyle } from './ContactsList.styled';
import { ButtonStyle } from 'components/App.styled';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const phoneBook = useSelector(getPhoneBookValue);
  const filterPhoneBook = useSelector(getFilter);

  const lowerFilter = filterPhoneBook.toLowerCase();
  const visibleContacts = phoneBook.filter(({ name }) =>
    name.toLowerCase().includes(lowerFilter)
  );

  const deleteContact = contactId => {
    dispatch(delContact(contactId));
  };

  return (
    <ContactListStyle>
      {visibleContacts.map(({ name, number, id }) => (
        <ContactItemStyle key={id}>
          <p>
            {name}: {number}
          </p>
          <ButtonStyle type="botton" onClick={() => deleteContact(id)}>
            Delete
          </ButtonStyle>
        </ContactItemStyle>
      ))}
    </ContactListStyle>
  );
};

// import css from './ContactList.module.css'
// const ContactList = ({ contacts, onDeleteContact }) => (
//   <section>

//     <ul className={css.list}>
//       {contacts.map(contact => (
//         <li className={css.item} key={contact.id}>
//           {contact.name + ' : ' + contact.number}
//           {
//             <button className={css.btn}
//               type="button"
//               name="delete"
//               onClick={() => onDeleteContact(contact.id)}
//             >
//               Delete
//             </button>
//           }
//         </li>
//       ))}
//     </ul>
//   </section>
// );

// export default ContactList
