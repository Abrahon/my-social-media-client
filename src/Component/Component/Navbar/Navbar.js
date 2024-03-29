import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(err => console.log(err));
  }


  const menuItems = <React.Fragment>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/media'>Media</Link></li>
    <li><Link to='/message'>Message</Link></li>
    <li><Link to='/about'>About</Link></li>

    {user?.uid ? 
      
        <>
          <li><button onClick={handleLogOut}>SignOut</button></li>

        </>
        : <li><Link to='/login'>Login</Link></li>
    }

  </React.Fragment>
  return (
    <div className="navbar  t-3 flex justify-between bg-base-100 bg-stone-700 text-gray-500 font-semibold shadow-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={1} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl bg-gradient-to-r from-cyan-500 to-blue-500">Social media</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
        </ul>
      </div>


    </div>
  );
};

export default Navbar;