// Import Modules
import React, { useState, useEffect } from "react";
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
      .catch(err => alert('Something went wrong'))
  }
    
  // Return admin form
  return(
    <AdminForm initialValues={formValues} 
      onSubmit={onSubmit} 
      enableReinitialize>
      Create admin
    </AdminForm>
  )
}
  
// Export CreateAdmin Component
export default CreateAdmin
