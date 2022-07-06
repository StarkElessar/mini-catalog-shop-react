import React from 'react'
import { FaShippingFast } from 'react-icons/fa'

export default function Delivery() {
  return (
    <div className='product-card__delivery-type'>
      <FaShippingFast className='product-card__delivery-type_icon' />
      <span className='product-card__delivery-type_text'>Бесплатно по РБ</span>
    </div>
  )
}
