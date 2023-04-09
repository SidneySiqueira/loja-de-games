export interface Product {
    id?: string;
    category: string,
    description: string,
    image: string,
    name: string,
    price: string,
    shipping: boolean,
    subDescription: string
  }

  export interface Category {
    item: string;
  }