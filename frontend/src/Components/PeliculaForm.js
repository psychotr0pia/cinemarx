import React from "react";
import * as Yup from "yup";
import { Formik,  Field, ErrorMessage } from "formik";
import {  FormGroup, FormControl, Button, Form } from "react-bootstrap";

const PeliculaForm = (props) => {
  const validationSchema = Yup.object().shape({
    titulo: Yup.string().required("Required"),
    director: Yup.string().required("Required"),
    duracion: Yup.number().required("Requerido").positive("Debe ser un numero positivo").integer("Debe ser un numero entero."),
    restriccion: Yup.number().min(0).max(1).integer("Debe ser 0 (sin restriccion) o 1 (con restriccion)"),
    sinopsis: Yup.string().required("Required"),
    elenco: Yup.string().required("Required"),
    calificacion: Yup.string()
  });
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
	    <Form.Label>Titulo</Form.Label>
            <Field name="titulo" type="text" 
                className="form-control" />
            <ErrorMessage
              name="titulo"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
	    <Form.Label>Director</Form.Label>
            <Field name="director" type="text" 
                className="form-control" />
            <ErrorMessage
              name="director"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
	  <FormGroup>
            <Form.Label>Duracion</Form.Label>
            <Field name="duracion" type="number"
                className="form-control" />
            <ErrorMessage
              name="duracion"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
	  <FormGroup>
            <Form.Label>Restriccion</Form.Label>
            <Field name="restriccion" type="number"
                className="form-control" />
            <ErrorMessage
              name="restriccion"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
	  <FormGroup>
            <Form.Label>Sinopsis</Form.Label>
            <Field name="sinopsis" type="text"
                className="form-control" />
            <ErrorMessage
              name="sinopsis"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
	  <FormGroup>
            <Form.Label>Elenco</Form.Label>
            <Field name="elenco" type="text"
                className="form-control" />
            <ErrorMessage
              name="elenco"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
	  <FormGroup>
            <Form.Label>Calificacion</Form.Label>
            <Field name="calificacion" type="text"
                className="form-control" />
            <ErrorMessage
              name="Calificacion"
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
    </div>
  );
};
  
export default PeliculaForm;
