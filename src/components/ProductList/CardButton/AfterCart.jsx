import React from 'react'
import './CardButton.css'
import {useDispatch,useSelector} from "react-redux"
import { decrement, increment } from '../../../redux/cart'

const AfterCart = () => {
  const {cartCount} = useSelector((state)=> state.cart)
  const dipatch = useDispatch()
  return (
    <div className="after-cart">
    <button className='cart-counter-button' onClick={()=> dipatch(decrement())}>-</button>
    <div className='cart-count'>{cartCount}</div>
    <button className='cart-counter-button' onClick={()=> dipatch(increment())}>+</button>
    </div>
  )
}

export default AfterCart