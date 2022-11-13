import React from "react";
import * as Yup from "yup";
import { Formik, Form,Field, ErrorMessage} from "formik";
import { FormGroup, Button, /*Form*/} from "react-bootstrap";

const PeliculaForm = (props) => {
  const validationSchema = Yup.object().shape({
    titulo: Yup.string().required("Required"),
    director: Yup.string().required("Required"),
    duracion: Yup.number().required("Required").positive("Debe ser un numero positivo").integer("Debe ser un numero entero."),
    restriccion: Yup.number().min(0).max(1).integer("Debe ser 0 (sin restriccion) o 1 (con restriccion)"),
    sinopsis: Yup.string().required("Required"),
    elenco: Yup.string().required("Required"),
    calificacion: Yup.string().required("Required"),
    urlimagen: Yup.string().required("Required"),
  });
  return(
    <>
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <h1 className="TituloList">Crear Pelicula</h1>
            <>Titulo</>
            <Field name="titulo" type="text"
              className="form-control" />
            <ErrorMessage
              name="titulo"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <>Director</>
            <Field name="director" type="text"
              className="form-control" />
            <ErrorMessage
              name="director"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <>Duracion</>
            <Field name="duracion" type="number"
              className="form-control" />
            <ErrorMessage
              name="duracion"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <>Restriccion</>
            <Field name="restriccion" type="number"
              className="form-control" />
            <ErrorMessage
              name="restriccion"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <>Sinopsis</>
            <Field name="sinopsis" type="text"
              className="form-control" />
            <ErrorMessage
              name="sinopsis"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <>Elenco</>
            <Field name="elenco" type="text"
              className="form-control" />
            <ErrorMessage
              name="elenco"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <>Calificacion</>
            <Field name="calificacion" type="text"
              className="form-control" />
            <ErrorMessage
              name="Calificacion"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
          <>Urlimagen</>
            <Field name="urlimagen" type="text"
              className="form-control" />
            <ErrorMessage
              name="urlimagen"
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

export default PeliculaForm;
