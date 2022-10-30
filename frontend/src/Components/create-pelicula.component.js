// Import Modules
import React, { useState, useEffect } from "react";
import PeliculaService from "../Services/pelicula.service";
import PeliculaForm from "./PeliculaForm";
//esta pasando de duracion: 1 a duracion: "1". Buscar como arregrarlo  
const CreatePelicula = () => {
  const [formValues, setFormValues] = useState({ titulo: "", director: "", duracion:0 , restriccion: 0, sinopsis: "", elenco: "", calificacion: ""});
  const onSubmit = peliculaObject => {
//    peliculaObject = JSON.stringify(peliculaObject);
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
    <PeliculaForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create pelicula
    </PeliculaForm>
  )
}
  
// Export CreatePelicula Component
export default CreatePelicula