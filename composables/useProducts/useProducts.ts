/**
 * @description Composable for managing products.
 * @returns {@link UseProducts}
 * @example
 * const { data, loading, fetchProducts } = useProducts();
 */
export const useProducts: UseProductsReturn = async (query) => {
  const { data, pending }: any = await useFetch('https://fakestoreapi.com/products', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
    query: { sort: query },
  });

  console.log('data', data)

  return {
    data,
    pending
  };
};