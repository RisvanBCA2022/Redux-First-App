import React,{memo} from 'react'
import './CartButton.css'
import {useDispatch} from "react-redux"
import { addToCart } from '../../../redux/cart'


const BeforeCart = ({product}) => {
  const dipatch = useDispatch()
  return (
    <div className="before-cart">
    <button className='add-cart-button' onClick={()=>dipatch(addToCart(product))}>Add to cart</button></div>

  )
}

export default memo(BeforeCart)