import React from 'react'
import { Outlet } from 'react-router-dom'

const CartLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default CartLayout