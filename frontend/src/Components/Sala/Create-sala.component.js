import React, { useState, /*useEffect*/ } from "react";
import { Navbarr } from "../../navbar/navbar";
import SalaService from "../../Services/sala.service";
import SalaForm from "./SalaForm";

  
const CreateSala = () => {
  const [formValues] = useState({disponibilidad: "Bueno", cantidad_de_asientos: 10, tipo_sala:"Tradicional", precio_sala:0 })
  const onSubmit = salaObject => {
    SalaService.create(salaObject)
      .then(res => {
        if (res.status === 200)
          alert('Sala successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert("no se puede"))
  }

  return(
    <>
    <Navbarr/>
    <SalaForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Crear
    </SalaForm>
    </>
  )
}
  
// Export CreateSala Component
export default CreateSala;
