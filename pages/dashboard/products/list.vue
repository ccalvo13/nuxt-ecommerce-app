<template>
  <div v-loading="!productList">
    <!-- <div class="heading-title absolute top-10">
      <h1 class="text-3xl font-bold">Products</h1>
    </div> -->
    <el-table class="w-full" v-if="productList" :data="productList" stripe>
      <el-table-column prop="id" label="ID" width="70" />
      <el-table-column prop="title" label="Name" />
      <el-table-column prop="price" label="Price" width="120" />
      <el-table-column prop="category" label="Category" width="180" />
      <el-table-column prop="description" label="Description" />
      <el-table-column label="Actions" width="180">
        <template #default="scope">
          <el-button size="small"
            >Edit</el-button
          >
          <el-button
            size="small"
            type="danger"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Product List',
  layout: 'forms',
  public: false,
})

let loading = ref(false);
let productList = reactive<Products[]>([]);

const products = await useProducts('asc');
productList = products;

</script>

<style>

</style>