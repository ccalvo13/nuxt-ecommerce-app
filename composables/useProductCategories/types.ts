export interface UseProductCategories {
  data: Readonly<Ref<string>>;
}

export type UseProductCategoriesReturn = () => UseProductCategories;