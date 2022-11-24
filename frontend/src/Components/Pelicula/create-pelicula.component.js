// Import Modules
import React, { useState, /*useEffect */} from "react";
//import { Col } from "react-bootstrap";
import { Navbarr } from "../../navbar/navbar";
import PeliculaService from "../../Services/pelicula.service";
import PeliculaForm from "./PeliculaForm";
//esta pasando de duracion: 1 a duracion: "1". Buscar como arregrarlo  

const CreatePelicula = () => {
  const [formValues] = useState
  ({ titulo: "", director: "", duracion: 0, restriccion: 0, sinopsis: "", elenco: "", calificacion: "", urlimagen: ""});
  const onSubmit = peliculaObject => {
    PeliculaService.create(peliculaObject)
      .then(res => {
        if (res.status === 200)
          alert('Pelicula successfully created')
        else
          Promise.reject()
      })
  }

  // Return pelicula form
  return(
    <>
      <Navbarr/>
      <PeliculaForm initialValues={formValues}
        onSubmit={onSubmit}
        enableReinitialize>
        Crear
      </PeliculaForm></>
  )
}

// Export CreatePelicula Component
export default CreatePelicula;
