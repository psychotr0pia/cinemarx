// Import Modules
import React, { useState, /*useEffect*/ } from "react";
import { Navbarr } from "../navbar/navbar";
import AdminService from "../Services/admin.service";
import AdminForm from "./AdminForm";
  
const CreateAdmin = () => {
  const [formValues, setFormValues] = useState({ rut: '', password: '' })
  const onSubmit = adminObject => {
    AdminService.create(adminObject)
      .then(res => {
        if (res.status === 200)
          alert('Admin successfully created')
        else
          Promise.reject()
      })
      .catch(err => alert(err.response.data.message))
      
  }
    
  // Return admin form
  return(
    <>
    <Navbarr/>
    <AdminForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Crear
    </AdminForm>
    </>
  )
}
  
// Export CreateAdmin Component
export default CreateAdmin
