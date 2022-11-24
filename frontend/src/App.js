// Import React
import React from "react";

// Import Bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import style from "./Components/Catalogo/Catalogo.module.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Import other React Component



// import EditPelicula from "./Components/edit-pelicula.component"
import { Movies } from "./Components/Catalogo/Catalogo-list.component"
// App Component
const App = () => {
  return (
    <div className="App">
      <Link className="AdminListButton"
        to={"/Create-admin/"}>
        Admin
      </Link>
      <h1 className={style.Titulo}>Catalogo</h1>
      <Movies />
    </div>
  );
};

export default { App };

