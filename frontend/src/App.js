// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import style from "./Components/Catalogo.module.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import other React Component



// import EditPelicula from "./Components/edit-pelicula.component"
import PeliculaList from "./Components/pelicula-list.component"
import { Movies } from "./Components/Catalogo-list.component"
// App Component
const App = () => {
  return (
    <div className="App">
      <Link className="AdminListButton"
        to={"/Create-admin/"}>
        Admin
      </Link>
      <Link to="/">
        <h1 className={style.Titulo}>Catalogo</h1></Link>
      <Movies />
    </div>
  );
};

export function Apps() {
  return <div>
    <header>
      Movies
    </header>
  </div>
}
export default { App, Apps };

