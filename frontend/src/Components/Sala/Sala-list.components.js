import React, { useState, useEffect } from "react";
import styles from "./Sala-list.module.css"
import { Table, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
import { Navbarr } from "../../navbar/navbar";
import SalaService from "../../Services/sala.service";
import SalaTableRow from "./SalaTableRow.component";


const SalaList = () => {
  const [sala, setsala] = useState([]);


  useEffect(() => {
    SalaService.getAll('/salas')
      .then((res) => {
        setsala(res?.data || []);
        console.log(sala)
        if(!res.data){
          alert("NO SE ENCONTRÓ LA INFORMACIÓN")
        }
      })
      .catch((err) => {
        console.log("error: ", err)

      });
  }, []);
  const DataTable = () => {
    return sala.map((res, i) => {
      return <SalaTableRow obj={res} key={i} />;
    });
  };

  return (
    <><Navbarr />
      <div className="table-wrapper">
        <Col className="TituloList">
          <h2>Salas</h2>
          <Link className={styles.boton}
            to={"/funciones-list/"}>
            Ver Funciones
          </Link>
          <Link className={styles.boton}
            to={"/crear-sala/"}>
            Crear Nueva Sala
          </Link>
        </Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Codigo de sala</th>
              <th>Disponibilidad</th>
              <th>Cantidad de asientos</th>
              <th>Tipo de sala</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>{DataTable()}</tbody>
        </Table>
      </div></>
  );
}
export default SalaList;
