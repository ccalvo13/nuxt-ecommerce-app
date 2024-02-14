export const useFilterByCategory: useFilterByCategoryReturn = async (query) => {
  const { data, pending }: any = await useFetch(`https://fakestoreapi.com/products/category/${query}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  return {
    data,
  };
};