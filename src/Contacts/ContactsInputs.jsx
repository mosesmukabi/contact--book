import './Contacts.css';
import { useState, useEffect } from 'react';
import { useContactStore } from '../store/ContactsStore';

function ContactsInputs() {
  const { addContact, selectedContact, updateContact, setSelectedContact } = useContactStore();
  const [contact, setContact] = useState({
    id: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    phoneNumber: ''
  });

  useEffect(() => {
    if (selectedContact) {
      setContact(selectedContact);
    }
  }, [selectedContact]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contact.id) {
      updateContact(contact);
    } else {
      addContact({ ...contact, id: Date.now().toString() });
    }
    setContact({ id: '', firstName: '', lastName: '', emailAddress: '', phoneNumber: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className='contact-heading'>Enter your contact details</h1>
        <input className='input' type="text" name="firstName" placeholder='Enter your first name' value={contact.firstName} onChange={handleChange} required />
        <input className='input' type="text" name="lastName" placeholder='Enter your last name' value={contact.lastName} onChange={handleChange} required />
        <input className='input' type="email" name="emailAddress" placeholder='Enter your email address' value={contact.emailAddress} onChange={handleChange} required />
        <input className='input' type="number" name="phoneNumber" placeholder='Enter your phone number' value={contact.phoneNumber} onChange={handleChange} required />
        <button className='submit-form'>{contact.id ? 'Update Contact' : 'Add Contact'}</button>
      </form>
    </div>
  );
}

export default ContactsInputs;
