import React, { useState, useEffect } from "react";
import PeliculaDataService from "../Services/pelicula.service";
import { Table, Button, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import PeliculaTableRow from "./PeliculaTableRow";
  
const PeliculaList = () => {
  const [pelicula, setPelicula] = useState([]);
  
  useEffect(() => {
    PeliculaDataService.getAll()
      .then(({ data }) => {
        setPelicula(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return pelicula.map((res, i) => {
      return <PeliculaTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper">
      <Row>
        <Col>
          <h2>Pelicula list</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Link to={"/create-pelicula/"}>
            <Button>Create pelicula</Button>
          </Link>
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
    </div>
  );
};
  
export default PeliculaList;
