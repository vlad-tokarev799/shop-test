import {AllProducts, ProductType} from "../types/product";

const baseURL = 'https://fakestoreapi.com/'

async function getResource(path: string) {
    const url = new URL(baseURL)
    url.pathname = path

    const response = await fetch(url)
    return await response.json()
}

export async function getCategories() {
    return await getResource('products/categories')
}

export async function getProductsFromCategories(categories: string[]) {
    const categoriesPromises = categories.map((category: string) => {
      return getResource(`products/category/${category}`)
    })
    const productsInCategories = await Promise.all(categoriesPromises)

    return productsInCategories.reduce((acc: Awaited<AllProducts>, curr: Awaited<ProductType[]>) => {
        const category = curr[0].category
        return {...acc, [category]: curr}
    }, {})
}
