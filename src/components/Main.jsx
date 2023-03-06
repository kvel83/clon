import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom"

import "./Main.css";

const Main = () => {
    return(
        <>
            <div className="container-fluid d-flex flex-column align-items-center justify-content-center gap-3 text-light">
                <h1>Películas y series ilimitadas y mucho más</h1>
                <h3>Disfruta donde quieras. Cancela cuando quieras.</h3>
                <p>¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
                <Form>
                    <Form.Group controlId="registro" className="d-flex" size="lg">
                        <Form.Control type="email" placeholder="Email" className="formSizeInput "></Form.Control>
                        <Link to="/cl/login" className="text-light bg-danger pb-2 pt-2 ps-3 pe-3 text-decoration-none fs-3">
                          Comenzar &gt;
                        </Link>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

export default Main;