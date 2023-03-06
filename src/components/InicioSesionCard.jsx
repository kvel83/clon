import React from "react";
import { Card , Button , Form, FormCheck } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./InicioSesionCard.css"


const InicioSesion = () => {
    return (
        <div className="container-fluid  100vh d-flex justify-content-center mt-0">
            <Card style={{ width: '30%'}} className="d-flex flex-column card-opaca">
                <Card.Body>
                    <Card.Text className="text-light h3 pt-5"> Inicia sesión</Card.Text>
                    <Form>
                        <Form.Group controlId="inicioSesion" className="d-flex flex-column gap-3 p-4" size="lg">
                            <Form.Control type="text" placeholder="Email o número de teléfono"></Form.Control>
                            <Form.Control type="text" placeholder="Contraseña"></Form.Control>
                            <Button variant="danger">Iniciar sesión</Button>
                            <div className="ayudas d-flex gap-5">
                                <Form.Check label="Recuérdame" className="text-light" checked="true"></Form.Check>
                                <a href="#" className="text-light">¿Necesitas ayuda?</a>
                            </div>
                            <div className="info text-light pb-5 mt-5">
                                <p>¿Primera vez en Netflix?<a href="#">Suscríbete ahora.</a></p>
                                <p>Esta página está protegida por Google reCAPTCHA para comprobar que no eres un robot. Más info.</p>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default InicioSesion;
