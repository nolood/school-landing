import React from "react";
import Link from "next/link";

const Header = () => {
  
  return (
    <section className="section">
      <div className="container">
        <div className="navbar bg-base-300 rounded-xl">
          <div className="navbar-start">
            <Link href='/' className="btn btn-ghost normal-case text-xl">Logo</Link>
          </div>
          <div className="navbar-center md:hidden">
            <ul className="menu menu-horizontal px-1">
              <li><Link href='/'>Main</Link></li>
              <li><Link href='/'>Courses</Link></li>
              <li><Link href='/'>Educators</Link></li>
              <li><Link href='/'>Info</Link></li>
            </ul>
          </div>
          <div className="navbar-end gap-2 md:hidden">
            <Link href='/' className='btn btn-ghost normal-case'>Login</Link>
            <Link href='/' className='btn btn-ghost normal-case'>Sign Up</Link>
          </div>
          <div className='navbar-end hidden md:block'></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
