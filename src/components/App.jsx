import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import Footer from './Footer'
import Header from './Header'
import SectionPromo from './SectionPromo'
import SectionCatalog from './SectionCatalog'

import store from '../redux/store'
import { setProducts } from '../redux/actions/products'

// function App() {
//   useEffect(() => {
//     axios.get('http://localhost:3000/db.json')
//       .then(({ data }) => setProducts(data.products))
//   }, [])

//   return (
//     <div className='wrapper'>
//       <Header />

//       <main className='page'>
//         <SectionPromo />
//         <SectionCatalog
//           productData={products}
//         />
//       </main>

//       <Footer />
//     </div>
//   )
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => this.props.setProducts(data.products))
  }

  render() {
    return (
      <div className='wrapper'>
        <Header />

        <main className='page'>
          <SectionPromo />
          <SectionCatalog
            productData={this.props.items}
          />
        </main>

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.products.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (items) => dispatch(setProducts(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
