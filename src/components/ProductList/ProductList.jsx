import React, { useState } from 'react'
import products from '../../api/products.json'
import BeforeCart from './CartButton/BeforeCart'
import AfterCart from './CartButton/AfterCart'
import {useSelector,useDispatch} from "react-redux"
import './ProductList.css'
import CartButtons from './CartButton'
import Cart from '../../redux/cart'

const ProductList = () => {
  const {cartList} = useSelector((state)=> state.cart)
 
  console.log(cartList);

  return (
    <section className='container'>
    {products.map((product,key)=>(
        <div className='product-container' key={key}>
        <img src={product.image} alt='' />
        <h3>{product.title}</h3>
        <CartButtons product={product} />
        </div>
    ))}
    </section>
  )
}

export default ProductList