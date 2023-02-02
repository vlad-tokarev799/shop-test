import './category.scss'
import Product from "../product";

import {CategoryType} from "../../types/category";
import {ProductType} from '../../types/product';

export default function Category(props: CategoryType) {
    const {title, products, onAddInCart} = props
    const productElements = products.map((product: ProductType) => {
      return (
        <Product
          {...product}
          key={product.id}
          onAddInCart={() => onAddInCart(product)}
        />
      )
    })

    return (
        <div className={'category'}>
            <h2 className={'category__title'}>{title}</h2>
            <div className={'category__products'}>
                {productElements}
            </div>
        </div>
    )
}
