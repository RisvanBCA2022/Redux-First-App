import React from 'react'
import './CartButton.css'
import {useDispatch,useSelector} from "react-redux"
import { decrement, increment } from '../../../redux/cart'

const AfterCart = ({cartCount,productID}) => {
  const dipatch = useDispatch()
  return (
    <div className="after-cart">
    <button className='cart-counter-button' onClick={()=> dipatch(decrement(productID))}>-</button>
    <div className='cart-count'>{cartCount}</div>
    <button className='cart-counter-button' onClick={()=> dipatch(increment(productID))}>+</button>
    </div>
  )
}

export default AfterCart