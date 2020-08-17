import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const handleFormValidation = (data) => console.log(data);

  return (
    <form className='form' onSubmit={handleSubmit(handleFormValidation)}>
      <Input name='firstName' type='text' label='First name' />
    </form>
  );
};

export default Form;
