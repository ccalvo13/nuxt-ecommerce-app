export const useProducts = async (query: string): Promise<Products[]> => {
  return await useFetch("https://fakestoreapi.com/products", {
    method: "get",
    headers: { "Content-Type": "application/json" },
    query: { sort: query },
  }).then((response) => response.data.value as Products[]);
};
