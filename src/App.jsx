
import './App.css'
import Performance from './Components/Perdormance/Performance'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav/Nav'
import TabBar from './Components/Tab/TabBar'
import Tools from './Components/Tools.jsx/Tools'
import Cart from './Components/Cart/Cart'
import { Suspense, useState } from 'react'
import Loading from './Components/Loading/Loading'
import { Bounce, toast } from 'react-toastify'
import GetStartedSteps from './Components/GetStartedSteps/GetStartedSteps'
import PricingSection from './Components/PricingSection/PricingSection'

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
      toast.error(`"${item.name}" - is alreadey added to cart`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      return
    }
    setCarts([...carts, item])
    toast.success(`"${item.name}" - is successfully added to cart`, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }



  return (
    <div >
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
        <GetStartedSteps></GetStartedSteps>
        <PricingSection></PricingSection>
      </Suspense>
    </div >
  )
}

export default App
