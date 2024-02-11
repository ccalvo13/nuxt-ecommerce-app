import { defineStore } from "pinia";

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  function addCart() {
    cart.value++
  }
  function removeCart() {
    count.value--
  }

  return { count, addCart, removeCart }
})