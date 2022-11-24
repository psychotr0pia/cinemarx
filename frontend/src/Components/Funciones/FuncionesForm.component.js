import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup /*FormControl*/, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./create-funciones.module.css"

const FuncionesForm = (props) => {
  const validationSchema = Yup.object().shape({
    horario: Yup.string().required("Required"),
  });
  return (
    <>
      <div className="form-wrapper">
        <Formik {...props} validationSchema={validationSchema}>
          <Form>
            <FormGroup>
              <Col className="TituloList">
                <h1 className="TituloList">Funciones</h1>
                <Link className={styles.boton}
                  to={"/funciones-list/"}>
                  Ver Funciones
                </Link>
              </Col>
              <>Horario</>
              <Field name="horario" type=""
                className="form-control" />
              <ErrorMessage
                name="horario"
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


export default FuncionesForm;
