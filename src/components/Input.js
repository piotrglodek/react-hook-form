import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { name, type, label, register, error } = props;
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
      {error && <span className='form__error'>{error && error.message}</span>}
    </div>
  );
};

export default Input;

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  error: PropTypes.objectOf(PropTypes.string),
};
