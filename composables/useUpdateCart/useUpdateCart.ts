export const useUpdateCart = async (query: Cart): Promise<Cart> => {
  return await useFetch(`https://fakestoreapi.com/carts/${query.userId}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(query),
  }).then((response) => response.data.value as Cart);
};
