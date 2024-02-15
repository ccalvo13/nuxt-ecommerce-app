export type Cart = {
  id: number;
  date: string;
  products: CartProducts[];
  userId: number;
}

export type CartProducts = {
  productId: number;
  quantity: number;
  product?: Products;
}