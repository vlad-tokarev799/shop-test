import './cart-info.scss'
import cartIcon from './cart-icon.svg'
import {CartInfoType} from "../../types/cart-info";

export default function CartInfo({cartData}: { cartData: CartInfoType }) {
  const {price, count} = cartData

  return (
    <div className="cart-info">
      <div className={'cart-info__price'}>{price}$</div>
      <div className={'cart-info__count'}>
        <img src={cartIcon} alt=""/>
        {count}
      </div>
    </div>
  )
}
