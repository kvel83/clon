/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom"
import InicioSesion from "../components/InicioSesionCard";

import "./IniciarSession.css"

export default () => {
    return(
        <div className="fondo">
            <Link to="/">
                <img
                src="/assets/img/Netflix-Logo-PNG.png"
                width="130"
                height="100"
                className="d-inline-block align-top ms-5"
                alt="Netflix Logo"
                />
            </Link>
            <InicioSesion/>
        </div>
    );
}