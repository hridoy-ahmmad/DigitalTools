
import './App.css'
import Performance from './Components/Perdormance/Performance'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav/Nav'
import TabBar from './Components/Tab/TabBar'
import Tools from './Components/Tools.jsx/Tools'
import Cart from './Components/Cart/Cart'
import { Suspense, useState } from 'react'
import Loading from './Components/Loading/Loading'

const fetchPromse = async () => {
  const res = await fetch('/tools.json')
  return res.json()
}

const dataPromse = fetchPromse()


function App() {
  const [active, setActive] = useState('Products')
  const [carts, setCarts] = useState([])

  const handleProducts = () => {
    setActive('Products')
  }
  const handleCart = () => {
    setActive('Cart')
  }

  const handleAddCart = (item) => {
    const isExist = carts.find(i => i.id === item.id)
    if (isExist) {
      alert('already added')
      return
    }
    setCarts([...carts, item])
  }



  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>
        <Nav carts={carts}></Nav>
        <Hero></Hero>
        <Performance></Performance>
        <TabBar handleProducts={handleProducts} handleCart={handleCart} active={active} carts={carts}></TabBar>
        {
          active === 'Products' && <Tools handleAddCart={handleAddCart} dataPromse={dataPromse}></Tools>
        }
        {
          active === 'Cart' && <Cart carts={carts} setCarts={setCarts}></Cart >
        }
      </Suspense>
    </div >
  )
}

export default App
