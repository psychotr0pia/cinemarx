//import {Catalogocard} from "./Catalogocard.components";
//import pelis from "./pelis.json";
//import styles from "./catalogolist.module.css";
//import axios from "../Services/http-common.js";
import { useEffect, useState } from "react";
import { Col, Table } from "react-bootstrap";
import { Navbarr } from "../../navbar/navbar";
import FuncionesService from "../../Services/funciones.service";
import FuncionesTableRow from "./FuncionesTableRow";

export function Funciones(){
    
    const [funciones, setfunciones ] = useState([]);
    useEffect(()=>{
        FuncionesService.getAll('/funciones')
        .then((res)=>{
            setfunciones(res?.data || []);
            if(!res.data){
                alert("NO SE ENCONTRO LA INFORMACION")
            }
        }).catch((err)=>{
            console.log("error: ", err)
        })
    },[])
    const DataTable = () => {
        return funciones.map((res, i) => {
          return <FuncionesTableRow obj={res} key={i} />;
        });
      };
      return (
        <><Navbarr/>
        <div className="table-wrapper">
    
            <Col className="TituloList">
              <h2>Lista Funciones</h2>
            </Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>id_funciones</th>
                    <th>horario</th>
                  </tr>
                </thead>
                <tbody>{DataTable()}</tbody>
              </Table>
            </div></>
      );
}
