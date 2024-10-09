import { useContactStore } from '../store/ContactsStore';
import './Contacts.css';

function ContactDetail({ id, firstName, lastName, emailAddress, phoneNumber, disabled }) {
  const { deleteContact, setSelectedContact, toggleDisableContact } = useContactStore();

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  return (
    <div className={`ContactDetail ${disabled ? 'disabled' : ''}`}>
      <div className='contact-header'>
        <div className="initials-circle">
          {initials}
        </div>
        <h3>{firstName} {lastName}</h3>
      </div>
      <p>{emailAddress}</p>
      <p>{phoneNumber}</p>
      <div className='Contact-Details-control'>
        <button className='update-btn' onClick={() => setSelectedContact({ id, firstName, lastName, emailAddress, phoneNumber })}>
          Update
        </button>
        <button className='Delete-btn' onClick={() => deleteContact(id)}>
          Delete
        </button>
        <button className='Disable-btn' onClick={() => toggleDisableContact(id)}>
          {disabled ? 'Enable' : 'Disable'}
        </button>
      </div>
    </div>
  );
}

export default ContactDetail;
