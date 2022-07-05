import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import SectionPromo from "./components/SectionPromo"
import SectionCatalog from "./components/SectionCatalog"

function App() {

  return (
    <div className="wrapper">
      <Header />

      <main className="page">
        <SectionPromo />
        <SectionCatalog />
      </main>

      <Footer />
    </div>
  )
}

export default App
