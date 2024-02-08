const interface IProductsModel {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface UseProductsState {
  data: IProductsModel | null;
  loading: boolean;
}

export type FetchProducts = (slug: string) => Promise<Ref<Maybe<IProductsModel>>>;

export interface UseProducts {
  data: Readonly<Ref<UseProductState['data']>>;
  loading: Readonly<Ref<boolean>>;
  fetchProduct: FetchProduct;
}

export type UseProductsReturn = () => useProducts;