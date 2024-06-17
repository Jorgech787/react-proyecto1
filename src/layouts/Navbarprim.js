import React from 'react'

import { Navbar , Nav , Container} from 'react-bootstrap'
import { Outlet , Link } from 'react-router-dom'
import Logo1 from '../assets/img/logo1.png'


export default function Navbarprim() {
    return (
        <>
        <Navbar className="navBg" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='logoPrincipal' src={Logo1}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" >Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/Menu" >Menu</Nav.Link>
                    <Nav.Link as={Link} to="/Videos" >Hazlo tu </Nav.Link>
                    <Nav.Link as={Link} to="/Contactos" >Contactos</Nav.Link>
                    <Nav.Link as={Link} to="/Socios" >Socios</Nav.Link>
                    <Nav.Link as={Link} to="/Creditos" >Creditos</Nav.Link>
                      
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <section>
            <Outlet></Outlet>
        </section>
        
        </>
    )
}
