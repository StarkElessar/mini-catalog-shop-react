import React            from 'react'
import axios            from 'axios'
import { useDispatch }  from 'react-redux'

import Footer           from './Footer'
import Header           from './Header'
import SectionPromo     from './SectionPromo'
import SectionCatalog   from './SectionCatalog'
import { setProducts }  from '../redux/actions/products'

function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => dispatch(setProducts(data.products)))
  }, [])


  return (
    <div className='wrapper'>
      <Header />

      <main className='page'>
        <SectionPromo />
        <SectionCatalog />
      </main>

      <Footer />
    </div>
  )
}

export default App