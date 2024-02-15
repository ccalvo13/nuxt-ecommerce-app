export type Product = {
  productId: number;
  quantity: number;
}

export type Cart = {
  id: number;
  date: string;
  products: FilteredCart[];
  userId: number;
}

export type FilteredCart = {
  productId: number;
  quantity: number;
  product?: Products;
}