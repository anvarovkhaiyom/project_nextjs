'use client';
import React, { createContext, useContext, useState } from 'react';
const FormContext = createContext();
export function useFormContext(){
  return useContext(FormContext);
};
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};