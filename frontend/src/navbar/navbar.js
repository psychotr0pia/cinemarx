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
                            <Link to={"/create-admin"}
                                className="nav-link">
                                Crear Admin
                            </Link>
                        </Nav>

                        <Nav>
                            <Link to={"/admin-list"}
                                className="nav-link">
                                Lista Admins
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to={"/create-pelicula"}
                                className="nav-link">
                                Crear pelicula
                            </Link>
                        </Nav>

                        <Nav>
                            <Link to={"/pelicula-list"}
                                className="nav-link">
                                Lista Pelicula
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
