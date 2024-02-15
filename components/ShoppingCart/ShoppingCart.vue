<template>
  <div class="bg-gray-200 p-10">
    <div class="heading-title flex mb-10">
      <h1 class="text-3xl font-bold">Shopping Cart</h1>
    </div>
    <div>
      <el-table
        :data="cartList"
        class="w-full flex justify-between"
        header-cell-class-name="bg-gray-200 border-gray-400 text-gray-800"
        cell-class-name="bg-gray-200 border-gray-400 text-gray-800 py-5"
      >
        <el-table-column label="Product" class="bg-gray-200">
          <template #default="scope">
            <div class="flex justify-between">
              <div>
                <el-image
                  class="w-[100px] h-[100px]"
                  :src="scope.row.product.image"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :initial-index="4"
                  fit="cover"
                />
              </div>
              <div class="flex items-center m-4">
                <h4 class="text-[14px] font-bold text-gray-700">
                    {{ scope.row.product.title }}
                </h4>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="Quantity" class="bg-gray-200">
          <template #default="scope">
            <el-input-number
              v-model="scope.row.quantity"
              class="mx-4 ml--5"
              :min="1"
              :max="10"
              controls-position="right"
              @change="getSubtotal"
            />
          </template>
        </el-table-column>
        <el-table-column label="Total Price">
          <template #default="scope">
            <div class="flex items-center justify-between">
              <div class="mr-4">
                <span class="font-semibold">${{ Number(scope.row.product.price * scope.row.quantity).toFixed(2) }}</span>
              </div>
              <el-icon 
                class="el-icon--right m-4" 
                @click="handleDelete(scope.row)"
              >
                <el-icon-close-bold/>
              </el-icon>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="flex justify-end mt-10">
      <div class="w-1/3">
        <div class="flex justify-between">
          <span class="font-bold">Subtotal</span>
          <span>${{ subtotal }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-bold">Shipping</span>
          <span>$2.00</span>
        </div>
        <el-divider class="border-gray-400" />
        <div class="flex justify-between text-xl">
          <span class="font-bold">Total</span>
          <span class="font-bold">${{ total }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(['filteredCart']);
const emit = defineEmits(['getTotal']);

let cartList = props.filteredCart;
let subtotal = ref(0);
let shippingFee = ref(2);
let total = ref(0);

onMounted(async () => {
  getSubtotal()
})

const getSubtotal = () => {
  subtotal.value = 0;
  cartList.map((cart: CartProducts) => {
    if(cart.product) {
      subtotal.value += Number(cart.product.price * cart.quantity);
    }
  })
  subtotal.value = parseFloat((subtotal.value).toFixed(2));

  computeTotal();
}

const computeTotal = () => {
  total.value = parseFloat((Number(subtotal.value) + Number(shippingFee.value)).toFixed(2));

  emit('getTotal', total);
}

const handleDelete = (row: CartProducts) => {
  cartList = cartList.filter((cart: CartProducts) => {
    return cart.productId != row.productId;
  })
  getSubtotal();
}
</script>

<style>

</style>