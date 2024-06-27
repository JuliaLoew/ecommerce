
import React, { useState, useEffect } from 'react';

const Woman = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
      let ignore = false;
      const getProducts = async () => {
          try {
              const response = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
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



  return (
    <div>
      <h1 className="text-3xl font-bold">Woman´s clothing</h1>
      <p>Here is the woman´s clothing from our range.</p>
      <ul className= "flex flex-wrap">
        {products.map((product) => (
          <li key={product.id} className="w-1/3 p-4">
            <div className="border border-gray-300 rounded-lg p-4">
              <img className="h-64 w-auto" src={product.image} alt="Bild" />
              <h2 className="text-xl font-bold">{product.title}</h2>
              <p className="text-gray-600">{product.category}</p>
              <p className="text-gray-800 font-bold">${product.price}</p>
            </div>
          </li>
        ))}

      </ul>
    </div>
  );
};

export default Woman;
