import '../src/Components/style.css'
import './App.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route } from 'react-router-dom';
import CardDetails from './Components/CardDetails';

import Home from './Components/Home';
import Contact from './Components/Contact';
import Cards from './Components/Cards';

import CartItems from './Components/CartItems';
import { ProductInformation } from './Components/ProductInformation';



function App() {
  return (
    <>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Cards/>}></Route>
        <Route path='/contact' element={<Contact/> }></Route>
        <Route path='/cart/:id'  element={<CardDetails/>}></Route>
        <Route  path="/productinformation/:id" element={<ProductInformation/>}></Route>
        <Route path="/cartitems" element={<CartItems/>}></Route>
      </Routes>
      
      {/* <CardDetails/> */}
     {/* <ProductDetails/> */}
      
    </>
  );
}

export default App;
