import React from 'react'

import Logo from './Logo'
import ButtonCart from './ButtonCart'

const Header = React.memo(() => (
  <header className="header">
    <div className="header__container">
      <div className="header__box">
        <Logo/>
        <ButtonCart/>
      </div>
    </div>
  </header>
))

export default Header