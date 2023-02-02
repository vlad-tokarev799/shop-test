export type ProductType = {
  "id": number;
  "title": string;
  "price": number;
  "description": string;
  "category": string;
  "image": string;
  "rating": {
    "rate": number;
    "count": number;
  }
}

export type ProductInCart = {
  id: number,
  category: string,
  price: number,
  count: number
}

export type AllProducts = {
  [key: string]: ProductType[]
}
