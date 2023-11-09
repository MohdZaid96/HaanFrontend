import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home';
import Authentication from '../Pages/Authentication'
import Cart from '../Component/Cart';
import Product from '../Component/Product';
import SingleProduct from '../Component/SingleProduct';

import Payment from '../Component/Payment';

const AllRoutes = () => {
  return (
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Authentication />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/product/:id' element={<SingleProduct />}></Route>
          <Route path='/payment' element={<Payment />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          
      </Routes>
  )
}

export default AllRoutes;