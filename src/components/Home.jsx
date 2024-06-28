import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let ignore = false;
        const getProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) throw new Error("Something went wrong");
                const data = await response.json();
                if (!ignore) setProducts(data);
            
        } catch (error) {
            console.error(error);
        }
    };

    getProducts();

    return () => { ignore = true; };
    
}, []); 



const handleAddClick = (product) => {
  setCart([...cart, product]); 
};

return (
  <div className='mt-4 px-2 py-2'>
    <h1 className="text-3xl font-bold">eCommerce Shop</h1>
    <p>Welcome to our online shop.</p>
    <div>
    <Link to="/Electronics">
      <button className="mr-3 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        electronics
      </button>
    </Link>
    <Link to="/Men">
      <button className="mr-3 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Men´s clothing
      </button>
    </Link>
    <Link to="/Women">
      <button className="mr-3 mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Women´s clothing
      </button>
    </Link>
    <Link to="/Jewelery">
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">
        Jewerlery
      </button>
    </Link>
    </div>
    <ul className= "flex flex-wrap">
      {products.map((product) => (
        <li key={product.id} className="w-1/3 p-4">
          <div className="border border-gray-300 rounded-lg p-4">
            <img className="h-64 w-auto" src={product.image} alt="Bild" />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-600">{product.category}</p>
            <p className="text-gray-800 font-bold">${product.price}</p>
            <button onClick={() => handleAddClick(product)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Add to cart</button>
          </div>
        </li>
        
      ))}

    </ul>
    
  </div>
);

export default Home;
