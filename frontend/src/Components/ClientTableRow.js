import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ClientDataService from "../Services/client.service";
  
const ClientTableRow = (props) => {
  const { rut, password } = props.obj;
  
  const deleteClient = () => {
    ClientDataService.remove(rut)
      .then((res) => {
        if (res.status === 200) {
          alert("Client successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => {
        alert("Something went wrong")
      });
  };
  
  return (
    <tr>
      <td>{rut}</td>
      <td>{password}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-client/" + rut}>
          Edit
        </Link>
        <Button onClick={deleteClient} 
          size="sm" variant="danger">
          Delete
        </Button>
      </td>
    </tr>
  );
};
  
export default ClientTableRow;
