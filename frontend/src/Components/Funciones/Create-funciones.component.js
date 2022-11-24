// Import Modules
import React, { useState, /*useEffect */} from "react";
//import { Col } from "react-bootstrap";
import { Navbarr } from "../../navbar/navbar";
import FuncionesService from "../../Services/funciones.service";
import FuncionesForm from "./FuncionesForm.component";
//esta pasando de duracion: 1 a duracion: "1". Buscar como arregrarlo  

const CreateFunciones= () => {
  const [funciones, setFormValues] = useState({ horario: 0});
  const onSubmit = funcionesObject => {
    FuncionesService.create(funcionesObject)
      .then(res => {
        if (res.status === 200)
          alert('Funcion successfully created')
        else
          Promise.reject()
      }).catch(err => alert("no se puede"))
  }

  // Return pelicula form
  return(
    <>
      <Navbarr/>
      <FuncionesForm initialValues={funciones}
        onSubmit={onSubmit}
        enableReinitialize>
        Crear
      </FuncionesForm></>
  )
}

// Export CreatePelicula Component
export default CreateFunciones;