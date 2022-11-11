// Import Modules
import React, { useState, useEffect } from "react";
import { Navbarr } from "../navbar/navbar";
import AdminService from "../Services/admin.service";
import AdminForm from "./AdminForm";

const EditAdmin = (props) => {
  const [formValues, setFormValues] = useState({
    rut: props.match.params.rut,
    password: "Ingrese password nuevo"
  });
    
  //onSubmit handler
  const onSubmit = (AdminObject) => {
    AdminService
      .update(props.match.params.rut, AdminObject )
      .then((res) => {
        if (res.status === 200) {
          alert("Admin successfully updated");
          props.history.push("/admin-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  // Load data from server and reinitialize Admin form
  useEffect(() => {
    AdminService.get(props.match.params.rut)
      .then((res) => {
        const {password } = res.data;
        setFormValues({password });
      })
      .catch((err) => console.log(err));
  }, []);
  
  // Return Admin form
  return (
    <>
    <AdminForm
    initialValues={formValues}
    onSubmit={onSubmit}
    enableReinitialize>
    Modificar Admin
  </AdminForm></>
   
  );
};
  
// Export EditAdmin Component
export default EditAdmin;
