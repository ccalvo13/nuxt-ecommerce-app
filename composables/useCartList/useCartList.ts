export const useCartList: useCartReturn = async (query) => {
  const { data }: any = await useFetch(`https://fakestoreapi.com/carts/user/${query}`, {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  });

  return {
    data,
  };
};