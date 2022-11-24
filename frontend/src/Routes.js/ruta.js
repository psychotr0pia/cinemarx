import { DetallesHola } from "../paginas/detalles";
import PeliculaList from "../Components/Pelicula/pelicula-list.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from 'react'
import CreateAdmin from "../Components/Admin/create-admin.component";
import EditAdmin from "../Components/Admin/edit-admin.component";
import AdminList from "../Components/Admin/admin-list.component"; 
import CreatePelicula from "../Components/Pelicula/create-pelicula.component";
import App from "../App";
import { Funciones } from "../Components/Funciones/Funciones-list.component";
import CreateFunciones from "../Components/Funciones/Create-funciones.component";
import CreateSala from "../Components/Sala/Create-sala.component";
import SalaList from "../Components/Sala/Sala-list.components";

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
                <Route path="/funciones-list" component={Funciones} />
                <Route path="/crear-funciones" component={CreateFunciones} />
                <Route path="/crear-sala" component={CreateSala} />
                <Route path="/sala-list" component={SalaList} />
            </Switch>
        </Router>
    );
}
