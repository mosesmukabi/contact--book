// src/App.jsx
import './App.css';
import Contacts from './Contacts/Contacts';
import ContactsInputs from './Contacts/ContactsInputs';

function App() {
  return (
    <div className="App">
      <ContactsInputs />
      <Contacts />
    </div>
  );
}

export default App;
