import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { Rutas } from "../Routes.js/ruta"
import SalaService from "../../Services/sala.service";


const SalaTableRow = (props) => {
  const {CODIGO_SALA, DISPONIBILIDAD, CANTIDAD_DE_ASIENTOS, tipo_sala, precio_sala} = props.obj;
  const deleteSala = () => {

    console.log(CODIGO_SALA)

    SalaService.remove(CODIGO_SALA)
      .then((res) => {
        console.log(CODIGO_SALA)
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
      <td>{CODIGO_SALA}</td>
      <td>{DISPONIBILIDAD}</td>
      <td>{CANTIDAD_DE_ASIENTOS}</td>
      <td>{tipo_sala}</td>
      <td>{precio_sala}</td>
      <td>
        <Link className="edit-link" 
          to={"/crear-funciones/"+ CODIGO_SALA}>
          Crear Funcion
        </Link>
        <Button onClick={deleteSala} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default SalaTableRow;