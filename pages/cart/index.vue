<template>
  <div v-loading="loading">
    <div class="h-screen m-20">
      <el-container class="h-full" v-if="!loading">
        <el-aside class="m-4" width="60%">
          <ShoppingCart :filteredCart="filteredCart" @get-total="getTotal"/>
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
let filteredCart = ref([]);
let loading = ref(false);

onMounted(async () => {
  loading.value = true;

  const { data: carts } = await useCartList(2);
  const { data: products } = await useProducts('asc');

  filteredCart.value = carts.value[0].products.map((cart) => {
    if (products.value.some((product) => product.id === cart.productId)) {
        cart.product = products.value.find((product) => product.id === cart.productId);
        return cart;
    } else {
        return cart;
    }
  });

  loading.value = false;
});

const getTotal = (price) => {
  total.value = price.value;
};

</script>

<style>

</style>