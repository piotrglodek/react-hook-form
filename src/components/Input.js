import React from 'react';

const Input = (props) => {
  const { name, type, label, register } = props;
  return (
    <div className='form__control'>
      <input
        ref={register}
        name={name}
        type={type}
        id={name}
        className='form__input'
      />
      <label htmlFor={name} className='form__label'>
        {label}
      </label>
    </div>
  );
};

export default Input;
