import React from 'react';
import Contacts from '../contacts/Contacts';
import PropTypes from 'prop-types';

const Home = () => {
    return(
        <div className="grid-2">
            <div>
                {/* Contact Form */}
            </div>
            <div>
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