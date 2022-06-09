import React from 'react';
import PropTypes from 'prop-types';
import { contacto } from '../../models/contacto.class';


const ContactoMostrar = ({contacto}) => {
    return (
        <div>

            <h4>Nombre: {contacto.nombre} </h4>
            <h4>Apellido: {contacto.apellido} </h4>
            <h4>Email: {contacto.email} </h4>

            <h5> Este contacto está: { contacto.conectado ? "Conectado!":"Desconectado!" }</h5>

        </div>
    );
};


ContactoMostrar.propTypes = {
    contacto: PropTypes.instanceOf(contacto)
};



export default ContactoMostrar;
