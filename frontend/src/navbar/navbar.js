import { Nav, Navbar, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import React from 'react'
import { Link } from "react-router-dom";

export const Navbarr = () => {
    return (
        <header className="App-header">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <Link to={"/"}
                            className="nav-link">
                            CINEMARX
                        </Link>
                    </Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav>
                            <Link to={"/admin-list"}
                                className="nav-link">
                                Lista de Admin
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to={"/pelicula-list"}
                                className="nav-link">
                                Lista de Pelicula
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to={"/sala-list"}
                                className="nav-link">
                                Lista de Salas
                            </Link>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}
/*<Nav>
                            <Link to={"/funciones-list"}
                                className="nav-link">
                                Lista Funciones
                            </Link>
                        </Nav>
                        */
