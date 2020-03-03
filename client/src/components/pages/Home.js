import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactFilter from '../contacts/ContactFilter';
import ContactForm from '../contacts/ContactForm';

const Home = () => {
    return(
        <div className="grid-2">
            <div>
                <ContactForm/>
            </div>
            <div>
                <ContactFilter/>
                <Contacts/>
            </div>
        </div>
    )
};

Home.protoTypes = {
  
}

Home.defaultProps ={
   
}

export default Home;