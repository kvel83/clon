import React from "react";
import { Navbar, Container , NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Laptop , Display , Tablet , Phone } from "react-bootstrap-icons";
import logo from "../assets/img/Netflix-Logo-PNG.png"

const Registro = () => {
    return(
        <>
            <Navbar>
                <Container>
                  <Navbar.Brand href="">
                  <Link to="/">
                      <img
                        src={logo}
                        width="130"
                        height="100"
                        className="d-inline-block align-top"
                        alt="Netflix Logo"
                      />
                    </Link>
                  </Navbar.Brand>
                  <Navbar.Collapse className="justify-content-end">
                      <Link to="/cl/login" className="text-dark fs-5 text-decoration-none">
                        Iniciar sesión
                      </Link>
                  </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr className="opacity-25"/>
            <div className="registro d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
                <div className="dispositivos d-flex justify-content-center align-items-center">
                    <Laptop color="red" size={65}/>
                    <Display color="red" size={65}/>
                    <Tablet color="red" size={65}/>
                    <Phone color="red" size={65} />
                </div>
                <p className="fs-6">PASO 1 de 3</p>
                <p className="h2">Completa la</p>
                <p className="h2">configuración de tu</p>
                <p className="h2">cuenta</p>
                <p className="m-0">Netflix está personalizado para ti.</p>
                <p className="m-0">Crea una contraseña para comenzar</p>
                <p>a ver Netflix.</p>
                <Link to="/cl/enProceso" className="text-light bg-danger pb-2 pt-2 ps-3 pe-3 text-decoration-none fs-3 ps-5 pe-5">
                    Siguiente
                </Link>
            </div>

        </>
    )
}

export default Registro;