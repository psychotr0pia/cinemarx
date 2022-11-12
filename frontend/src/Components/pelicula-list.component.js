import React, { useState, useEffect } from "react";
import PeliculaDataService from "../Services/pelicula.service";
import { Table, /*Button*/ Row, Col} from "react-bootstrap";
//import { Link } from "react-router-dom";
import PeliculaTableRow from "./PeliculaTableRow";
import { Navbarr } from "../navbar/navbar";
  
const PeliculaList = () => {
  const [pelicula, setPelicula] = useState([]);
  
  useEffect(() => {
    console.log("TEST 1")
    PeliculaDataService.getAll()
      .then(({ data }) => {
        console.log("TEST 2",data)

        setPelicula(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return pelicula.map((res, i) => {
      console.log("TEST 3",res)
      return <PeliculaTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <><Navbarr/>
    <div className="table-wrapper">
      <Row>
        <Col className="TituloList">
          <h2>Lista Peliculas</h2>
        </Col>
      </Row>
      <Row>
        <Col>
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
        </Col>
      </Row>
    </div></>
  );
};
  
export default PeliculaList;
