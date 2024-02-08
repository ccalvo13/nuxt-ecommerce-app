<template>
  <!-- <div class="container mx-auto max-w-90 px-4 py-16 sm:px-6 sm:py-24 sm:w-98 lg:max-w-4/6 lg:px-8"> -->
  <div class="container mx-auto max-w-90 mt-10">
    <div class="heading-title flex justify-center mb-10">
      <h1 class="text-3xl font-bold">Products</h1>
    </div>
    <div class="product-filters flex space-between">
      <div class="flex gap-2">
        <el-checkbox-group v-model="categoryGroup" size="large">
          <el-checkbox-button label="All products">
            All products
          </el-checkbox-button>
          <el-checkbox-button v-for="(category, index) in categoriesList" :key="category" :label="category">
            {{ category }}
          </el-checkbox-button>
        </el-checkbox-group>
      </div>
      <div class="flex-grow" />
      <div class="flex gap-2">
        <el-select
          v-model="sortBy"
          class="m-2"
          placeholder="Sort by"
          style="width: 240px"
        >
          <el-option
            label="Ascending Order"
            value="asc"
          />
          <el-option
            label="Descending Order"
            value="desc"
          />
        </el-select>
      </div>
    </div>
    <div class="product-list">
      <el-row class="flex items-stretch mx-4 justify-center">
        <el-col
          v-for="(product, index) in products"
          :key="index"
          class="p-4"
          :xs="20" :sm="12" :md="8" :lg="6" :xl="6"
        >
          <el-card class="block bg-gray-100 overflow-hidden border-2 h-full" :body-style="{ padding: '0px' }">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                :src="product.image"
                class="image h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div class="flex justify-between bg-gray-100">
              <div class="m-4">
                <h3 class="text-sm text-gray-700">
                  <a href="#">
                    {{ product.title }}
                  </a>
                </h3>
                <div class="bottom">
                  <span class="font-semibold">$ {{ product.price }}</span>
                </div>
              </div>
              <el-icon class="el-icon--right m-4">
                <el-icon-star />
              </el-icon>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  title: 'Products',
  public: true,
})

const categoryGroup = ref(['All products'])

// const { data, pending }: any = await useFetch('https://fakestoreapi.com/products', {
//   method: 'get',
//   headers: { 'Content-Type': 'application/json' }
// });

const { data, fetchProducts } = useProducts();
console.log('products', fetchProducts);

const { data: categories }: any = await useFetch('https://fakestoreapi.com/products/categories', {
  method: 'get',
  headers: { 'Content-Type': 'application/json' }
});

console.log('categories', categories);

const products = data;
const categoriesList = categories.value;
</script>

<style>

</style>