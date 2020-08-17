import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
// schema
import { schema, schemaDefaultValues } from '../schema';

import Input from './Input';

const Form = () => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues: schemaDefaultValues,
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });
  const handleFormValidation = (data) => console.log(data);

  return (
    <form className='form' onSubmit={handleSubmit(handleFormValidation)}>
      <Input
        name='firstName'
        type='text'
        label='First name'
        register={register}
        error={errors.firstName}
      />
      <Input
        name='lastName'
        type='text'
        label='Last name'
        register={register}
        error={errors.lastName}
      />
      <Input
        name='email'
        type='email'
        label='Email'
        register={register}
        error={errors.email}
      />
      <Input
        name='password'
        type='password'
        label='Password'
        register={register}
        error={errors.password}
      />
      <Input
        name='repeatPassword'
        type='password'
        label='Repeat password'
        register={register}
        error={errors.repeatPassword}
      />
      <div className='form__control'>
        <input type='submit' className='form__submit' value='Validate form' />
      </div>
    </form>
  );
};

export default Form;
