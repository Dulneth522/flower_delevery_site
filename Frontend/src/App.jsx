import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin.jsx'
import Signin from './pages/Signin.jsx'
import About from './pages/About.jsx'
import Signup from './pages/Signup.jsx'
import Contact from './pages/Contact.jsx'
import DoPayment from './pages/doPayment.jsx';  
import AddToFlowers from './pages/AddToFlowers.jsx';
import Delivery from './pages/Delivery.jsx';

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("myFlowerCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("myFlowerCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (flower) => {
    setCartItems((prevItems) => [...prevItems, flower]);
    console.log("Added to cart:", flower.name);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems((prevItems) => 
      prevItems.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Home cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart}/>
        } />
        
        <Route path="/admin" element={<Admin/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/addTOFlowers' element={<AddToFlowers/>}/>
        <Route path='/delivery' element={<Delivery cartItems={cartItems} removeFromCart={removeFromCart}/>}/>
        
        <Route path='/about' element={
          <About cartItems={cartItems} removeFromCart={removeFromCart} />
        }/>
        
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/doPayment'element={<DoPayment cartItems={cartItems}/>}/>
        
        <Route path='/contact' element={
          <Contact cartItems={cartItems} removeFromCart={removeFromCart} />
        }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App