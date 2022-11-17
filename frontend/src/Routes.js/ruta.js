import { DetallesHola } from "../paginas/detalles";
import PeliculaList from "../Components/pelicula-list.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import CreateAdmin from "../Components/create-admin.component";
import EditAdmin from "../Components/edit-admin.component";
import AdminList from "../Components/admin-list.component";
import CreatePelicula from "../Components/create-pelicula.component";
import Catalogo from "../Components/Catalogo.component";
import App from "../App";
import { Funciones } from "../Components/Funciones-list.component";

/* <Route exact path="/descripcion/:peliculaId" component={DetallesHola} > <DetallesHola />
                </Route>
                
                 */
export const Rutas = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"> <App.App /></Route>
                <Route path="/descripcion/:peliculaId" component={DetallesHola} />
                <Route path="/create-admin" component={CreateAdmin} />
                <Route path="/edit-admin/:rut" component={EditAdmin} />
                <Route path="/admin-list" component={AdminList} />
                <Route path="/create-pelicula" component={CreatePelicula} />
                <Route path="/pelicula-list" component={PeliculaList} />
                <Route path="/Catalogo" component={Catalogo} />
                <Route path="/funciones-list" component={Funciones} />
            </Switch>
        </Router>
    );
}
