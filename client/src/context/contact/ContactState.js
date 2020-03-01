import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from'./ContactContext';
import contactReducer from './ContactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../Types';

const ContactState = props => {
    initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Franken',
                email: 'Jill@gmail.com',
                phone: '505-444-4444',
                type: 'family'
            },
            {
                id: 2,
                name: 'Bill Franken',
                email: 'Bill@gmail.com',
                phone: '505-333-4444',
                type: 'family'
            },
            {
                id: 3,
                name: 'Will Franken',
                email: 'Will@gmail.com',
                phone: '303-444-4444',
                type: 'family'
            },
        ]
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);


    // Add a contact

    // Delete a contact

    // Set current contact

    // Clear current contact

    // Update a contact

    // Filter contacts

    // Clear filter

    return(
        <ContactContext.Provider
        value={{
            contacts: state.contacts
        }}
        >
            {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;