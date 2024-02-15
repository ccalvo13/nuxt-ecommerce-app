<template>
  <div v-loading="loading">
    <div class="h-screen m-20">
      <el-container class="h-full" v-if="!loading">
        <el-aside class="m-4" width="60%">
          <ShoppingCart v-if="filteredCart" :filteredCart="filteredCart" @get-total="getTotal"/>
        </el-aside>
        <el-main>
          <PaymentInfo :total="total"/>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
let total = ref(0);
let filteredCart = reactive<FilteredCart[]>([]);
let loading = ref(false);

onMounted(async () => {
  loading.value = true;

  const carts = await useCartList(2);
  const products = await useProducts('asc');

  carts[0].products.map((cart) => {
    if (products.some((product) => product.id === cart.productId)) {
      cart.product = products.find((product) => product.id === cart.productId);
  
      filteredCart.push(cart);
    }
  });

  loading.value = false;
});

const getTotal = (price: number) => {
  total.value = price;
};

</script>

<style>

</style>