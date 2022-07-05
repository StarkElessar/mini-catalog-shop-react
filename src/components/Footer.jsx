import React from 'react'
import { FaRegCopyright } from 'react-icons/fa'

export default function Footer() {
  const date = new Date()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">
          <span><FaRegCopyright /> StarkElessar {date.getFullYear()}</span>
        </div>
      </div>
    </footer>
  )
}
