import React from 'react';
import Link from 'next/link';
import { FormInput } from '@/features/form-input/ui';

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className='card bg-base-200 w-full my-5'>
      <div className='card-body items-center text-center'>
        <h1 className='card-title text-4xl mb-12'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
          <FormInput label='Your Email' type='email' name='email' placeholder='info@site.com' />
          <FormInput
            label='Your Password'
            type='password'
            name='password'
            placeholder='**********'
          />
          <div className='flex flex-col gap-6'>
            <Link href='/registration' className='hover:text-primary-focus max-w-fit'>
              Don`t have an account? Sign up!
            </Link>
            <button className='btn btn-primary w-full'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
