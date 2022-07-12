import React from 'react'
import { Link } from 'react-router-dom'

const Logo = React.memo(() => {
  return (
    <Link to='/' className="header__logo">
      <span className='header__logo_title'>Mini-Catalog Shop</span>
      <span className='header__logo_desc'>самая доступная техника</span>
    </Link>
  )
})

export default Logo