import ContactDetail from './ContactDetail';
import { useContactStore } from '../store/ContactsStore';

function Contacts() {
  const { contacts } = useContactStore();

  return (
    <div>
      {contacts.map((contact) => (
        <ContactDetail key={contact.id} {...contact} />
      ))}
    </div>
  );
}

export default Contacts;
