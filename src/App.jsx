import React, { useState, useEffect } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SectionPromo from "./components/SectionPromo"
import SectionCatalog from "./components/SectionCatalog"

function App() {
  const [orders, setOrders] = useState([])
  const [products, setProducts] = useState([])
  const productData = [
    {
      id: 159.984,
      imgUrl: 'https://7745.by/sites/default/files/imagecache/subcat_preview/uploads/zoomos/img/1185308_0.jpg.webp',
      delivery: true,
      title: 'Стиральная машина BEKO WRE65P1BWW',
      price: 1182.61,
      brand: 'beko'
    },
    {
      id: 458.635,
      imgUrl: 'https://7745.by/sites/default/files/imagecache/subcat_preview/uploads/products/458554/WRE6512BWW-1.jpg.webp',
      delivery: true,
      title: 'Стиральная машина BEKO WRE6512',
      price: 1312.08,
      brand: 'beko'
    },
    {
      id: 465.263,
      imgUrl: 'https://7745.by/sites/default/files/imagecache/subcat_preview/products/stiralnaya-mashina-beko-rsge68512zss.jpeg.webp',
      delivery: true,
      title: 'Стиральная машина BEKO RSGE68512ZSS',
      price: 1218.00,
      brand: 'beko'
    },
    {
      id: 412.082,
      imgUrl: 'https://7745.by/sites/default/files/imagecache/subcat_preview/uploads/zoomos/img/1493268_0.jpg.webp',
      delivery: true,
      title: 'Стиральная машина BEKO RSGE685P2',
      price: 1148.00,
      brand: 'beko'
    },
    {
      id: 395.573,
      imgUrl: 'https://7745.by/sites/default/files/imagecache/subcat_preview/uploads/zoomos/img/1076883_0.png.webp',
      delivery: false,
      title: 'Стиральная машина SCHAUB LORENZ SLW MC6131',
      price: 830.00,
      brand: 'shaub'
    },
    {
      id: 395.591,
      imgUrl: 'https://7745.by/sites/default/files/imagecache/subcat_preview/uploads/products/395233/1076885_0.png.webp',
      delivery: false,
      title: 'Стиральная машина SCHAUB LORENZ SLW MC6133',
      price: 1120.00,
      brand: 'shaub'
    },
    {
      id: 395.617,
      imgUrl: 'https://7745.by/sites/default/files/imagecache/subcat_preview/uploads/zoomos/img/1400010_0.jpg.webp',
      delivery: true,
      title: 'Стиральная машина LG F2J5HS6W',
      price: 2061.16,
      brand: 'lg'
    },
    {
      id: 400.240,
      imgUrl: 'https://7745.by/sites/default/files/imagecache/subcat_preview/uploads/zoomos/img/1636929_0.jpg.webp',
      delivery: true,
      title: 'Стиральная машина LG F2V5HS2S',
      price: 1999.00,
      brand: 'lg'
    },
  ]
  const url = 'http://localhost:3000/db.json'

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.products)
      })
  }, [])

  const addToOrder = (item) => {
    setOrders({orders: [...orders, item]})
  }

  console.log(orders);


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
