import React from 'react';

const FormInput = ({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) => {
  return (
    <div className='form-control w-full'>
      <label htmlFor={name} className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <label className='input-group input-group-vertical'>
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          className='input input-bordered input-md'
        />
      </label>
    </div>
  );
};

export default FormInput;
