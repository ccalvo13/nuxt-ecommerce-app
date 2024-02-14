const interface ICartModel {
  id: number;
  date: string;
  products: Array<{
    productsId: number;
    quantity: number;
  }>;
  userId: number;
}

export interface UseCartList {
  data: Readonly<Ref<ICartModel>>;
}

export type UseCartReturn = () => useCart;