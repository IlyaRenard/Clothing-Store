import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'


const CartPage = () => {

    const {cart} = useTypedSelector(state=>state)
    console.log('cart', cart);

  return (
    <div>
        
    </div>
  )
}

export default CartPage