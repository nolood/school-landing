import React from 'react';

const LoginForm = () => {
  return (
    <div className='card bg-base-200 w-full mt-20'>
      <div className='card-body items-center text-center'>
        <h1 className='card-title text-4xl mb-12'>Login</h1>
        <form className='flex flex-col gap-6 w-full'>
          <div className='form-control w-full'>
            <label htmlFor='email' className='label'>
              <span className='label-text'>Your Email</span>
            </label>
            <label className='input-group input-group-vertical'>
              <input
                id='email'
                type='text'
                placeholder='info@site.com'
                className='input input-bordered'
              />
            </label>
          </div>
          <div className='form-control w-full'>
            <label htmlFor='email' className='label'>
              <span className='label-text'>Your Password</span>
            </label>
            <label className='input-group input-group-vertical'>
              <input
                id='password'
                type='password'
                placeholder='**********'
                className='input input-bordered'
              />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
