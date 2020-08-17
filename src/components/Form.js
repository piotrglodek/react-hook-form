import React from 'react';
import { useForm } from 'react-hook-form';
import Input from './Input';

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const handleFormValidation = (data) => console.log(data);

  return (
    <form className='form' onSubmit={handleSubmit(handleFormValidation)}>
      <Input
        name='firstName'
        type='text'
        label='First name'
        register={register}
      />
      <Input
        name='lastName'
        type='text'
        label='Last name'
        register={register}
      />
      <Input name='email' type='email' label='Email' register={register} />
      <Input
        name='password'
        type='password'
        label='Password'
        register={register}
      />
      <Input
        name='repeatPassword'
        type='password'
        label='Repeat password'
        register={register}
      />
      <div className='form__control'>
        <input type='submit' className='form__submit' value='Validate form' />
      </div>
    </form>
  );
};

export default Form;
