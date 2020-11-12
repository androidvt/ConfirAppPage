import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarWrapper } from "../../styles/NavbarStyles"
import Button from '@material-ui/core/Button';

const navbar = ({open}) => {
    return (
       <>
            
            <NavbarWrapper open={open}>
            <Link to="/" style={{color:'Black', fontSize:'1em'}}>ConfirmApp</Link>
                <Link to="/"><Button color="primary" disableElevation >Home</Button></Link>
                <Link to="/Privacy"><Button color="primary" disableElevation >Aviso De Privacidad</Button></Link>
                <Link to="/PoliticTratament"><Button color="primary" disableElevation>Politica de Tratamiento de Datos</Button></Link>
                <Link to="/termsAndCondition"><Button color="primary" disableElevation>Terminos y condiciones</Button></Link>
                 <Link to="/ContactUs"><Button color="primary" disableElevation >ContactUs</Button></Link>
            </NavbarWrapper>
         </>   
    )
}

export default navbar;