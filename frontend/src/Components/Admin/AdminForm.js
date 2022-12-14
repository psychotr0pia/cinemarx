import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup /*FormControl*/, Button } from "react-bootstrap";
  
const AdminForm = (props) => {
  const validationSchema = Yup.object().shape({
    rut: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <>
    <div className="form-wrapper">
    <Formik {...props} validationSchema={validationSchema}>
      <Form>
        <FormGroup>
          <h1 className="TituloList">Administrador</h1>
          <>Rut</>
          <Field name="rut" type="text" 
              className="form-control" />
          <ErrorMessage
            name="rut"
            className="d-block invalid-feedback"
            component="span"
          />
        </FormGroup>
        <FormGroup>
          <>Contraseña</>
          <Field name="password" type="text" 
              className="form-control" />
          <ErrorMessage
            name="password"
            className="d-block invalid-feedback"
            component="span"
          />
        </FormGroup>
        <Button variant="danger" size="lg" 
          block="block" type="submit">
          {props.children}
        </Button>
      </Form>
    </Formik>
  </div></>
  );
};
  
export default AdminForm;
