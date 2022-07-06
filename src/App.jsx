import React, { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SectionPromo from "./components/SectionPromo"
import SectionCatalog from "./components/SectionCatalog"
import axios from "axios"

function App() {
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/db.json')
      .then(({ data }) => setProducts(data.products))
  }, [])

  const addToOrder = (item) => {
    setOrders({orders: [...orders, item]})
  }


  return (
    <div className="wrapper">
      <Header orders={orders} />

      <main className="page">
        <SectionPromo />
        <SectionCatalog
          productData={products}
          onAdd={addToOrder}
        />
      </main>

      <Footer />
    </div>
  )
}

export default App
