<template>
  <div>
    
  </div>
</template>

<script lang="ts" setup>
const { data: cart }: any = await useFetch(`https://fakestoreapi.com/carts/user/2`, {
  method: 'get',
  headers: { 'Content-Type': 'application/json' },
});

console.log('cart', cart.value)
</script>

<style>

</style>