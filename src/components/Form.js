import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const handleFormValidation = (data) => console.log(data);

  return (
    <form className='form' onSubmit={handleSubmit(handleFormValidation)}>
      form
    </form>
  );
};

export default Form;
