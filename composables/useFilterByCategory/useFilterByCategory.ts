export const useFilterByCategory = async (query: string): Promise<Products[]> => {
  return await useFetch(`https://fakestoreapi.com/products/category/${query}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.data.value as Products[]);
};