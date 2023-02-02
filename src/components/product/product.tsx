import './product.scss'
import {useState} from "react";

import Loader from "../loader";

import {ProductType} from "../../types/product";
type ProductProps = ProductType & {
  onAddInCart: () => void
}

export default function Product(props: ProductProps) {
  const [loading, setLoading] = useState(true)
  const onImageLoaded = () => setLoading(false)

  return (
    <div className={'product'}>
      <div className={'product__image-wrapper'}>
        <img src={props.image} alt="" className={'product__image'} onLoad={onImageLoaded}/>
        {loading && <Loader />}
      </div>
      <h3 className={'product__title'}>{props.title}</h3>
      <p className={'product__description'}>{props.description}</p>
      <div className={'product__info'}>
        <p className={'product__price'}>{props.price} $</p>
        <span className={'product__rating'}>{props.rating.rate}</span>
      </div>
      <button onClick={props.onAddInCart} className={'product__add-to-cart'}>Add to Cart</button>
    </div>
  )
}
