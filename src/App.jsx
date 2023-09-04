import { Fragment, useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import ProductList from './components/ProductList/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
    <Header />
    <ProductList />
    </Fragment>
  )
}

export default App
