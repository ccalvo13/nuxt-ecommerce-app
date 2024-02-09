const interface IProductsModel {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface useFilterByCategory {
  data: Readonly<Ref<IProductsModel>>;
  pending: boolean;
}

export type useFilterByCategoryReturn = () => useFilterByCategory;