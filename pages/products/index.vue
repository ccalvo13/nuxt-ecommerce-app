<template>
  <!-- <div class="container mx-auto max-w-90 px-4 py-16 sm:px-6 sm:py-24 sm:w-98 lg:max-w-4/6 lg:px-8"> -->
  <div class="container mx-auto max-w-90 mt-10" v-loading="loading">
    <div class="heading-title flex justify-center mb-10">
      <h1 class="text-3xl font-bold">Products</h1>
    </div>
    <div class="product-filters flex space-between">
      <div class="flex gap-2">
        <el-radio-group v-if="categoriesList.length" v-model="categoryGroup" @change="getProducts" size="large">
          <el-radio-button label="All products">
            All products
          </el-radio-button>
          <el-radio-button v-for="category in categoriesList" :key="category" :label="category">
            {{ category }}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div class="flex-grow"></div>
      <div class="flex gap-2">
        <el-select v-model="sortBy" class="m-2" placeholder="Sort by" style="width: 240px" @change="getSortBy">
          <el-option label="Ascending Order" value="asc" />
          <el-option label="Descending Order" value="desc" />
        </el-select>
      </div>
    </div>
    <div class="product-list">
      <el-row v-if="productList.length" class="flex items-stretch mx-4 justify-center">
        <el-col v-for="(product, index) in productList" :key="index" class="p-4" :xs="20" :sm="12" :md="8" :lg="6"
          :xl="6">
          <el-card class="block bg-gray-100 overflow-hidden border-2 h-full cursor-pointer"
            :body-style="{ padding: '0px' }" @click="openDialog(product)">
            <div
              class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img :src="product.image" class="image h-full w-full object-cover object-center lg:h-full lg:w-full" />
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
          <ProductDialog v-model="isOpen" :product="selectedProduct" @close-dialog="closeDialog" />
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

const categoryGroup = ref('All products');
const sortBy = ref('asc');
const isOpen = ref(false);

let loading = ref(false);
let productList = reactive<Products[]>([]);
let categoriesList: string[] = reactive([]);
let selectedProduct = reactive<Products>({
  id: 0,
  title: '',
  price: 0,
  category: '',
  description: '',
  image: ''
})

onMounted(async () => {
  loading.value = true;

  const categories = await useProductCategories();
  categoriesList = categories;

  const products = await useProducts(sortBy.value);

  getSorted(products)
});

const getProducts = async () => {
  loading.value = true;
  sortBy.value = 'asc';
  productList = [];

  if (categoryGroup.value === 'All products') {
    const products = await useProducts(sortBy.value);

    productList = products;
  } else {
    const products = await useFilterByCategory(categoryGroup.value);

    productList = products;
  }

  getSorted(productList)
}

const getSorted = async (products: Products[]) => {
  productList = products.sort((a, b) => a.price - b.price);

  loading.value = false;
}

const getSortBy = async () => {
  loading.value = true;

  productList = productList.sort((a: Products, b: Products) => {
    if (sortBy.value === 'asc') {
      return a.price - b.price;
    } else if (sortBy.value === 'desc') {
      return b.price - a.price
    }
    return 0;
  })

  loading.value = false;
}

const openDialog = (product: Products) => {
  selectedProduct = product;
  isOpen.value = true;
}

const closeDialog = () => {
  isOpen.value = !isOpen.value;
}
</script>

<style></style>