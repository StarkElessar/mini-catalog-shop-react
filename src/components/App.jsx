import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Footer from './Footer'
import Header from './Header'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'

export const App = () => (
  <div className='wrapper'>
    <Header/>
    <main className='page'>
      <Routes>
        <Route exact path='/' element={<Catalog />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </main>
    <Footer/>
  </div>
)