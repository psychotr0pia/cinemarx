// Import Modules
import React, { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import { Navbarr } from "../navbar/navbar";
import PeliculaService from "../Services/pelicula.service";
import PeliculaForm from "./PeliculaForm";
//esta pasando de duracion: 1 a duracion: "1". Buscar como arregrarlo  

const CreatePelicula = () => {
  const [formValues, setFormValues] = useState
  ({ titulo: "", director: "", duracion: 0, restriccion: 0, sinopsis: "", elenco: "", calificacion: "", urlimagen: ""});
  const onSubmit = peliculaObject => {
    PeliculaService.create(peliculaObject)
      .then(res => {
        if (res.status === 200)
          alert('Pelicula successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert('Something went wrong'))
  }

  // Return pelicula form
  return(
    <>
      <Navbarr/>
      <Col className="TituloList">
        <h2>Crear Pelicula</h2>
      </Col>
      <PeliculaForm initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize>
        Crear
      </PeliculaForm></>
  )
}

// Export CreatePelicula Component
export default CreatePelicula;
