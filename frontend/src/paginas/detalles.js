import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Navbarr } from "../navbar/navbar"
import { Table, Button, Row, Col } from "react-bootstrap";
import style from "./detalles.module.css"


export function DetallesHola() {
    return (
        <>
            <Link to="/" className="Titulo">
                <h1 className={style.Titulo}>Catalogo</h1></Link>
            <div className={style.DetallesContainer}>
            </div>
            <div>
                
            </div>
        </>
    )
};

