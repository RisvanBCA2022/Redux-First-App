import { Fragment, useEffect, useRef, useState } from 'react'
import {ProductList,Header} from './components'
import {useDispatch, useSelector} from "react-redux"
import './App.css'
import { fetchuser } from './redux/cart'

function App() {
  // <button onClick={loadMoreUsers}>Add users</button>
  //   <h2 style={{color:"white"}}>{JSON.stringify(userDetail,undefined,4)}</h2>
 const {userDetail}=useSelector((state)=> state.cart)
  const dispatch = useDispatch()
  const counterRef = useRef(1)
  useEffect(()=>{
    dispatch(fetchuser(counterRef.current))
  },[])
  const loadMoreUsers=()=>{
    dispatch(fetchuser(++counterRef.current))
  }
  return (
    <div>
    <Header />
    
    <ProductList />

    </div>
  )
}

export default App
