export const useCartList = async (query: Number): Promise<Cart[]> => {
  return useFetch(`https://fakestoreapi.com/carts/user/${query}`, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  }).then((response) => {
    console.log('carts', response.data.value)
    return response.data.value as Cart[];
  });
};
