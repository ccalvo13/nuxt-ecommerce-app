export const useProductCategories = async (): Promise<string[]> => {
  return await useFetch('https://fakestoreapi.com/products/categories', {
    method: 'get',
    headers: { 'Content-Type': 'application/json' }
  }).then(response => response.data.value as string[]);
};