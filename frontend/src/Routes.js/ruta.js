import { DetallesHola } from "../paginas/detalles";
import { Page } from "../paginas/page";
import PeliculaList from "../Components/pelicula-list.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from 'react'
import CreateAdmin from "../Components/create-admin.component";
import EditAdmin from "../Components/edit-admin.component";
import AdminList from "../Components/admin-list.component";
import CreatePelicula from "../Components/create-pelicula.component";
import Catalogo from "../Components/Catalogo.component";
import App from "../App";


export const Rutas = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/descripcion/:peliculaId"> <DetallesHola />
                </Route>
                <Route exact path="/"> <App.App />
                </Route>
                <Route path="/create-admin" component={CreateAdmin} />
                <Route path="/edit-admin/:rut" component={EditAdmin} />
                <Route path="/admin-list" component={AdminList} />
                <Route path="/create-pelicula" component={CreatePelicula} />
                <Route path="/pelicula-list" component={PeliculaList} />
                <Route path="/Catalogo" component={Catalogo} />
            </Switch>
        </Router>
    );
}
