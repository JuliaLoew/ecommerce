import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Cart from './components/Cart';
import Electronics from './components/Electronics';
import Men from './components/Men'; 
import Women from './components/Women';
import Jewelery from './components/Jewelery';

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/Electronics" element={<Electronics />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Jewelery" element={<Jewelery />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
