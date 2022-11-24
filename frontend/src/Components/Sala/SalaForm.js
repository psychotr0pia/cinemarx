import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup /*FormControl*/, Button } from "react-bootstrap";
  
const SalaForm = (props) => {
  const validationSchema = Yup.object().shape({
    DISPONIBILIDAD: Yup.string().required("Required"),
    CANTIDAD_DE_ASIENTOS: Yup.string().required("Required"),
    tipo_sala: Yup.string().required("Required"),
    precio_sala: Yup.string().required("Required"),

  });
  return (
    <>
    <div className="form-wrapper">
    <Formik {...props} validationSchema={validationSchema}>
      <Form>
        <FormGroup>
          <h1 className="TituloList">Salas</h1>
        </FormGroup>
        <FormGroup>
          <>Disponibilidad</>
          <Field name="DISPONIBILIDAD" type="text" 
              className="form-control" />
          <ErrorMessage
            name="DISPONIBILIDAD"
            className="d-block invalid-feedback"
            component="span"
          />
        </FormGroup>
        <FormGroup>
          <>Cantidad de Asientos</>
          <Field name="CANTIDAD_DE_ASIENTOS" type="number" 
              className="form-control" />
          <ErrorMessage
            name="CANTIDAD_DE_ASIENTOS"
            className="d-block invalid-feedback"
            component="span"
          />
        </FormGroup>
        <FormGroup>
          <>Tipo Sala</>
          <Field name="tipo_sala" type="text" 
              className="form-control" />
          <ErrorMessage
            name="tipo_sala"
            className="d-block invalid-feedback"
            component="span"
          />
        </FormGroup>
        <FormGroup>
          <>Precio</>
          <Field name="precio_sala" type="number" 
              className="form-control" />
          <ErrorMessage
            name="precio_sala"
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
  
export default SalaForm;
