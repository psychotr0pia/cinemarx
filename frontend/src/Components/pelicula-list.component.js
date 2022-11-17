import React, { useState, useEffect } from "react";
import PeliculaDataService from "../Services/pelicula.service";
import { Table, Col} from "react-bootstrap";
//import { Link } from "react-router-dom";
import PeliculaTableRow from "./PeliculaTableRow";
import { Navbarr } from "../navbar/navbar";
  
const PeliculaList = () => {
  const [pelicula, setPelicula] = useState([]);
  
  useEffect(() => {
    PeliculaDataService.getAll()
      .then(({ data }) => {
        setPelicula(data);
      })
      .catch((error) => {
      });
  }, []);
  const DataTable = () => {
    return pelicula.map((res, i) => {
      return <PeliculaTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <><Navbarr/>
    <div className="table-wrapper">

        <Col className="TituloList">
          <h2>Lista Peliculas</h2>
        </Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Director</th>
                <th>Duracion</th>
	  	          <th>Restriccion</th>
	  	          <th>Sinopsis</th>
	              <th>Elenco</th>
	  	          <th>Calificacion</th>
              </tr>
            </thead>
            <tbody>{DataTable()}</tbody>
          </Table>
        </div></>
  );
};
  
export default PeliculaList;
