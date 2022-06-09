import React from 'react';
import { contacto } from '../../models/contacto.class';
import ContactoMostrar from '../Pure/contacto_mostrar';


const ContactoImp = () => {
    const contactoRec = new contacto( "Rafael", "Seoanes", "rafaseoanes9@gmail.com", false);

    return (
        <div>
        <div>
       <h3>Tu contacto es:</h3>

        </div>
            <ContactoMostrar contacto={contactoRec}  ></ContactoMostrar>
            
        </div>
    );
};

export default ContactoImp;
