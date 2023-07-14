export interface Product {
  _id: string;
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Props {
  products: Product[];
}