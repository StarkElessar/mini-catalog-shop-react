import React            from 'react'
import { useDispatch }  from 'react-redux'

import Footer           from './Footer'
import Header           from './Header'
import SectionCatalog   from './SectionCatalog'
import { fetchProducts }  from '../redux/actions/products'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [])


  return (
    <div className='wrapper'>
      <Header />

      <main className='page'>
        <SectionCatalog />
      </main>

      <Footer />
    </div>
  )
}

export default App