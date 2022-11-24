import React from "react";
import { Button } from "react-bootstrap";
//import { Rutas } from "../Routes.js/ruta";
import FuncionesService from "../../Services/funciones.service";
  
const FuncionesTableRow = (props) => {
  const {id_funciones, horarios } = props.obj;
  
  const deleteFunciones = () => {
    FuncionesService.remove(id_funciones)
      .then((res) => {
        if (res.status === 200) {
          alert("Funciones successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong")
      });
  };
  
  return (
    <tr>
      <td>{id_funciones}</td>
      <td>{horarios}</td>
      <td>
        <Button onClick={deleteFunciones} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default FuncionesTableRow;