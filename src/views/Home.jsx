/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Main from "../components/Main";
import NavBarClon from "../components/Navbar";

import "./Home.css"
export default () => {
    return(
        <div className="principal">
            <div className="container">
                <NavBarClon/>
                <Main/>
            </div>
        </div >
    );
}