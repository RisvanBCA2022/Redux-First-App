import React, { useMemo } from 'react'
import AfterCart from './AfterCart'
import BeforeCart from './BeforeCart'
import {useSelector} from 'react-redux'

const CartButtons = ({product}) => {
  const {cartList} = useSelector((state)=> state.cart)
  const cartCount=useMemo(()=>{
    return cartList.find((item)=>item?.id === product?.id)?.count
  },[cartList])

  return (

    <div>
    {cartCount >0?<AfterCart productID={product.id} cartCount={cartCount}/> : <BeforeCart product={product} />}
    </div>
  
  )
}

export default CartButtons