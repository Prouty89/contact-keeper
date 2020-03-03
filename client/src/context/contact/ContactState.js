import React, { useReducer } from 'react';
import  { v4 as uuidv4 }  from 'uuid';
import ContactContext from'./contactContext';
import contactReducer from './contactReducer';
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
    const initialState = {
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
        ],
        current: null,
        filtered: null
    };
    const [state, dispatch] = useReducer(contactReducer, initialState);


    // Add a contact
    const addContact = contact => {
        contact.id = uuidv4();
        dispatch({ type: ADD_CONTACT, payload: contact });
    };

    // Delete a contact
    const deleteContact = id => {
        dispatch({ type: DELETE_CONTACT, payload: id });
    };

    // Set current contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    };

    // Clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    };

    // Update a contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    }

    // Filter contacts
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    }

    // Clear filter
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    };

    return(
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            current: state.current,
            filtered: state.filtered,
            addContact,
            deleteContact,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            clearFilter
        }}
        >
        {props.children}
        </ContactContext.Provider>
    )
};

export default ContactState;