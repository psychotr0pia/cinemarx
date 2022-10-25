import React, { useState, useEffect } from "react";
import AdminDataService from "../Services/admin.service";
import { Table } from "react-bootstrap";
import AdminTableRow from "./AdminTableRow";
  
const AdminList = () => {
  const [admin, setAdmin] = useState([]);
  
  useEffect(() => {
    AdminDataService.getAll()
      .then(({ data }) => {
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
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>RUT</th>
	          <th>Password</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default AdminList;