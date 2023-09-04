import React,{memo} from 'react'
import './CardButton.css'
import {useDispatch} from "react-redux"
import { addToCart } from '../../../redux/cart'


const BeforeCart = () => {
  const dipatch = useDispatch()
  return (
    <div className="before-cart">
    <button className='add-cart-button' onClick={()=>dipatch(addToCart())}>Add to cart</button></div>

  )
}

export default memo(BeforeCart)