import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const handleFormValidation = (data) => console.log(data);

  return (
    <form className='form' onSubmit={handleSubmit(handleFormValidation)}>
      <Input name='firstName' type='text' label='First name' />
      <div className='form__control'>
        <input type='submit' className='form__submit' value='Validate form' />
      </div>
    </form>
  );
};

export default Form;
