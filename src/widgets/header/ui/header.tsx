import React from 'react';
import Link from 'next/link';
import ThemeSelect from '@/features/change-theme/ui/theme-select';

const Header = () => {
  return (
    <section className='section'>
      <div className='container'>
        <div className='navbar bg-base-200 rounded-xl'>
          <div className='navbar-start w-2/6'>
            <Link href='/' className='btn btn-ghost normal-case text-xl'>
              Logo
            </Link>
          </div>
          <div className='navbar-center md:hidden'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <Link href='/'>Main</Link>
              </li>
              <li>
                <Link href='/'>Courses</Link>
              </li>
              <li>
                <Link href='/'>Educators</Link>
              </li>
              <li>
                <Link href='/'>Info</Link>
              </li>
            </ul>
          </div>
          <div className='navbar-end gap-2 md:hidden'>
            <Link href='/login' className='btn btn-ghost normal-case'>
              Login
            </Link>
            <Link href='/registration' className='btn btn-ghost normal-case'>
              Sign Up
            </Link>
            <ThemeSelect />
          </div>
          <div className='navbar-end hidden md:block'></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
