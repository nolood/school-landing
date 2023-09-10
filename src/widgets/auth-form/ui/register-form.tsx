import React from 'react';
import Link from 'next/link';
import { FormInput } from '@/features/form-input/ui';

const RegisterForm = () => {
  return (
    <div className='card bg-base-200 w-full mt-20'>
      <div className='card-body items-center text-center'>
        <h1 className='card-title text-4xl mb-12'>Register</h1>
        <form className='flex flex-col gap-6 w-full'>
          <FormInput label='username' type='text' name='username' placeholder='Ivan' />
          <FormInput label='Password' type='password' name='password' placeholder='**********' />
          <FormInput
            label='Confirm Password'
            type='password'
            name='password'
            placeholder='********'
          />
          <FormInput label='Email' type='email' name='email' placeholder='info@site.com' />
          <FormInput
            label='Fullname'
            type='text'
            name='fullname'
            placeholder='Ivanov Ivan Ivanovich'
          />
          <div className='flex flex-col gap-6'>
            <Link href='/login' className='hover:text-primary-focus max-w-fit'>
              Have an account? Login!
            </Link>
            <button className='btn btn-primary w-full'>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
