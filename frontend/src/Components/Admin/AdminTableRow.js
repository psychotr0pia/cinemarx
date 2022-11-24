import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AdminService from "../../Services/admin.service";
  
const AdminTableRow = (props) => {
  const { rut, password} = props.obj;
  const deleteAdmin = () => {
    AdminService.remove(rut)
      .then((res) => {
        if (res.status === 200) {
          alert("Admin successfully deleted");
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
          to={"/edit-admin/" + rut}>
          Editar
        </Link>
        <Button onClick={deleteAdmin} 
          size="sm" variant="danger">
          Eliminar
        </Button>
      </td>
    </tr>
  );
};
  
export default AdminTableRow;
