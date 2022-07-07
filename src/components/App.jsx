import React from 'react'

import Footer from './Footer'
import Header from './Header'
import SectionCatalog from './SectionCatalog'

export const App = () => (
  <div className='wrapper'>
    <Header />
    <main className='page'>
      <SectionCatalog />
    </main>
    <Footer />
  </div>
)