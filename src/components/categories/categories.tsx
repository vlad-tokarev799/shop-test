import './categories.scss'

import Category from "../category";
import {CategoriesProps} from "../../types/category";


export default function Categories(props: CategoriesProps) {
    const {categories, products, onAddInCart} = props

    const renderCategories = () => {
        return categories.map((category) => {
            return (
              <Category
                key={category}
                title={category}
                products={products[category]}
                onAddInCart={onAddInCart}
              />
            )
        })
    }

    return <div className={'categories'}>{renderCategories()}</div>
}
