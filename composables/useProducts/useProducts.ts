/**
 * @description Composable for managing products.
 * @returns {@link UseProducts}
 * @example
 * const { data, loading, fetchProducts } = useProducts();
 */
export const useProducts: UseProductsReturn = () => {
  const state = useState<UseProductsState>('products', () => ({
    data: null,
    loading: false,
  }));

  /**
   * @description Function for fetching products.
   * @example
   * getProducts();
   */
  const fetchProducts: FetchProducts = async () => {
    state.value.loading = true;
    const { data, error }: any = await useFetch('https://fakestoreapi.com/products', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' }
    });
    // useHandleError(error.value);
    console.log('data', data.value)
    console.log('error', error.value);
    state.value.data = data.value;
    state.value.loading = false;
    return data.value;
  };

  return {
    fetchProducts,
    ...toRefs(state.value),
  };
};