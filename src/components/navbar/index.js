import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarWrapper } from "../../styles/NavbarStyles"

const navbar = ({open}) => {
    return (
       <>
            
            <NavbarWrapper open={open}>
            <Link to="/" style={{color:'blue'}}>ConfirmApp</Link>
                <Link to="/">Home</Link>
                <Link to="/Privacy">Aviso De Privacidad</Link>
                <Link to="/PoliticTratament">Politica de Tratamiento de Datos</Link>
                <Link to="/termsAndCondition">Terminos y condiciones</Link>
                 <Link to="/ContactUs">ContactUs</Link>
            </NavbarWrapper>
         </>   
    )
}

export default navbar;