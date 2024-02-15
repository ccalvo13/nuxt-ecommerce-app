export const useFilterByCategory = async (query: string): Promise<Products[]> => {
  return await useFetch(`https://fakestoreapi.com/products/category/${query}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => {
    console.log('response', response.data.value)
    return response.data.value as Products[]
  });
};