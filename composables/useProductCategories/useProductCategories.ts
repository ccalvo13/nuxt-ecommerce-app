export const useProductCategories: UseProductCategoriesReturn = async () => {
  const { data }: any = await useFetch('https://fakestoreapi.com/products/categories', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  });

  return {
    data
  };
};