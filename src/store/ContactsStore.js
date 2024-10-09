import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useContactStore = create(
  devtools(
    persist(
      (set) => ({
        contacts: [],
        selectedContact: null,

        addContact: (contact) => set((state) => ({
          contacts: [...state.contacts, { ...contact, disabled: false }]
        })),

        updateContact: (updatedContact) => set((state) => ({
          contacts: state.contacts.map((contact) =>
            contact.id === updatedContact.id ? updatedContact : contact
          ),
          selectedContact: null,
        })),

        deleteContact: (id) => set((state) => ({
          contacts: state.contacts.filter((contact) => contact.id !== id)
        })),

        toggleDisableContact: (id) => set((state) => ({
          contacts: state.contacts.map((contact) =>
            contact.id === id ? { ...contact, disabled: !contact.disabled } : contact
          )
        })),

        setSelectedContact: (contact) => set({ selectedContact: contact }),
      }),
      {
        name: 'contact-storage', 
      }
    )
  )
);
