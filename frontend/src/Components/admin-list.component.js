import React, { useState, useEffect } from "react";
import AdminDataService from "../Services/admin.service";
import { Table, Col} from "react-bootstrap";
import AdminTableRow from "./AdminTableRow";
import { Navbarr } from "../navbar/navbar";

const AdminList = () => {
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    AdminDataService.getAll()
      .then(({ data }) => {
        console.log( data );
        setAdmin(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const DataTable = () => {
    return admin.map((res, i) => {
      return <AdminTableRow obj={res} key={i} />;
    });
  };

  return (
    <><Navbarr />
      <div className="table-wrapper">
        <Col className="TituloList">
          <h2>Lista Administrador</h2>
        </Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>RUT</th>
              <th>CONTRASEÑA</th>
            </tr>
          </thead>
          <tbody>{DataTable()}</tbody>
        </Table>
      </div></>
  );
};

export default AdminList;
