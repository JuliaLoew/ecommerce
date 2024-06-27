import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center p-4 pr-16 border border-gray-300 rounded-lg bg-red-700'>
      <div className='text-white text-2xl'>eCommerce</div>
      <div className='flex space-x-4'>
        <div className='border border-white bg-white p-2 rounded-lg'>
          <Link to="/" className="text-2xl text-red-700">Home</Link>
        </div>
        <div className='border border-white bg-white p-2 rounded-lg'>
          <Link to="/cart" className="text-2xl text-red-700">Cart</Link>
        </div>
        {/* <div className='border border-white bg-white p-2 rounded-lg'>
          <Link to="/Electronics" className="text-2xl text-red-700">Electronics</Link>
        </div> */}
        {/* <div className='border border-white bg-white p-2 rounded-lg'>
          <Link to="/Men" className="text-2xl text-red-700">Men</Link>
        </div>
        <div className='border border-white bg-white p-2 rounded-lg'>
          <Link to="/Woman" className="text-2xl text-red-700">Woman</Link>
        </div>
        <div className='border border-white bg-white p-2 rounded-lg'>
          <Link to="/Jewelery" className="text-2xl text-red-700">Jewelery</Link>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
