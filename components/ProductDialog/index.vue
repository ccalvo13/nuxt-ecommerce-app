<template>
  <el-dialog
    width="500"
    align-center
  >
    <template #header>
      <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          :src="product.image"
          class="image h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
    </template>
    <div>
      <div class="flex justify-between">
        <div class="my-4">
          <h4 class="text-[16px] font-bold text-gray-700">
            <a href="#">
              {{ product.title }}
            </a>
          </h4>
          <div class="bottom">
            <span class="font-semibold">$ {{ product.price }}</span>
          </div>
        </div>
        <div class="flex my-4">
          <span class="text-sm text-gray-700">
            {{ product.rating.rate }}
          </span>
          <el-icon class="el-icon--right mt-[1.4px]" :size="16" color="text-gray-700">
            <el-icon-star-filled />
          </el-icon>
        </div>
      </div>
      <div class="flex justify-between">
        <div>
          <span>{{ product.description }}</span>
        </div>
      </div>
    </div>
    <template #footer>
      <div class="flex my-4">
        <div class="quantity">
          <el-input-number v-model="quantity" :min="1" :max="10" />
        </div>
        <el-button type="primary" @click="addToCart(product)">
          Add to cart
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import type { ProductDialogProps } from '~/components/ProductDialog/types';

defineProps<ProductDialogProps>();
const quantity = ref(1);

const addToCart = (product) => {
  console.log('quantity: ' + quantity.value);
  console.log('product:'+ JSON.stringify(product));
}
// defineEmits(['closeDialog'])
</script>

<style>

</style>