import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          <span><FaRegCopyright /> StarkElessar {currentYear}</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer