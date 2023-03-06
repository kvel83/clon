import React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarClon = () => {
    return (
        <Navbar>
            <Container>
              <Navbar.Brand href="">
                <Link to="/">
                  <img
                    src="/assets/img/Netflix-Logo-PNG.png"
                    width="130"
                    height="100"
                    className="d-inline-block align-top"
                    alt="Netflix Logo"
                  />
                </Link>
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <NavDropdown title="🌎 Español" id="basic-nav-dropdown" className="text-light border border-light p-2">
                    <NavDropdown.Item href="" active>Español</NavDropdown.Item>
                    <NavDropdown.Item href="">English</NavDropdown.Item>
                </NavDropdown>
                  <Link to="/cl/login" className="text-light bg-danger pb-2 pt-2 ps-3 pe-3 ms-5 text-decoration-none rounded ">
                    Iniciar sesión
                  </Link>
              </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default NavBarClon;