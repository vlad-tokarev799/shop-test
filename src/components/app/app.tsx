import {useEffect, useState} from "react";
import {getCategories, getProductsFromCategories} from "../../services/fake-store-api";

import Categories from "../categories";
import Loader from "../loader/";
import Header from "../header";

import './app.scss'

import {ProductInCart} from "../../types/product";

function App() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState<ProductInCart[]>([])

  useEffect(() => {
    getCategories()
      .then((categories) => {
        setCategories(categories)
        return getProductsFromCategories(categories)
      })
      .then(objWithProducts => setProducts(objWithProducts))
      .then(() => setLoading(false))
  }, [])

  const onAddInCart = (product: ProductInCart) => {
    setCart((cart) => {
      const index = cart.findIndex(el => el.id === product.id)
      const elem = cart[index]

      if (elem) {
        return [
          ...cart.slice(0, index),
          {...elem, count: elem.count + 1},
          ...cart.slice(index + 1, cart.length)
        ]
      }

      return [...cart, {
        id: product.id,
        category: product.category,
        price: product.price,
        count: 1
      }]
    })
  }

  if (loading) {
    return (<div className={'app'}><Loader /></div>)
  }

  return (
    <div className={'app'}>
      <Header cart={cart}/>
      <Categories products={products} categories={categories} onAddInCart={onAddInCart}/>
    </div>
  );
}

export default App;
