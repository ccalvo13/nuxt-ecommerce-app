import { defineStore } from 'pinia'

interface ProductPayloadInterface {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export const useProductStore = defineStore('product', {
  state: () => ({
    productList: [],
    loading: false,
  }),
  actions: {
    async getProductList() {
      const { data, pending }: any = await useFetch('https://fakestoreapi.com/products', {
        method: 'get',
        headers: { 'Content-Type': 'application/json' }
      });

      console.log('products', data);

      this.loading = pending;

      if (data.value) {
        this.productList = data.value;
      }
    }
  }
});
