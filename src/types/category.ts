import {AllProducts, ProductInCart, ProductType} from "./product";

export type CategoryType = {
  title: any;
  products: any;
  onAddInCart: any;
}
export type CategoriesProps = {
  categories: string[],
  products: AllProducts,
  onAddInCart: (product: ProductInCart) => void
}
