import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PeliculaService from "../Services/pelicula.service";
  
const PeliculaTableRow = (props) => {
  const {id_pelicula, titulo, director, duracion, restriccion, sinopsis, elenco, calificacion } = props.obj;
  
  const deletePelicula = () => {
    PeliculaService.remove(id_pelicula)
      .then((res) => {
        if (res.status === 200) {
          alert("Pelicula successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong")
      });
  };
  
  return (
    <tr>
      <td>{id_pelicula}</td>
      <td>{titulo}</td>
      <td>{director}</td>
      <td>{duracion}</td>
      <td>{restriccion}</td>
      <td>{sinopsis}</td>
      <td>{elenco}</td>
      <td>{calificacion}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-pelicula/" + id_pelicula}>
          Edit
        </Link>
        <Button onClick={deletePelicula} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default PeliculaTableRow;
