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
            <span class="font-semibold">${{ product.price }}</span>
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
      <el-divider />
      <div class="flex justify-between subtotal">
        <div>
          <span class="font-semibold">Order Subtotal</span>
        </div>
        <div>
          <span class="font-semibold">${{ Number(product.price * quantity).toFixed(2) }}</span>
        </div>
      </div>
    </div>

    <template #footer>
      <div class="flex my-4 justify-between">
        <div class="quantity">
          <el-input-number v-model="quantity" :min="1" :max="10" />
        </div>
        <el-button type="primary" color="#9a584d" @click="addToCart(product)">
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

const addToCart = async (product) => {
  const today = new Date();
  const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  const { data: cart }: any = await useFetch(`https://fakestoreapi.com/carts/2`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: 2,
      date: date,
      products: [
        { 
          productId: product.id,
          quantity: quantity.value,
        }
      ]
    }),
  });
}
</script>

<style>

</style>