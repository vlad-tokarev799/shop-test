import Logo from './logo.svg';
import './header.scss'
import {useEffect, useState} from "react";
import CartInfo from "../cart-info";
import {ProductInCart} from "../../types/product";

export default function Header(props: {cart: ProductInCart[]}) {
  const [cartData, setCartData] = useState({price: 0, count: 0})
  const {cart} = props

  useEffect(() => {
    const data = cart.reduce((acc, cur) => ({
      price: acc.price + cur.count * cur.price,
      count: acc.count + cur.count
    }), {price: 0, count: 0})

    setCartData(data)
  }, [cart])

  return (
    <div className={'header'}>
      <img src={Logo} alt=""/>
      <CartInfo cartData={cartData}/>
    </div>
  )
}
