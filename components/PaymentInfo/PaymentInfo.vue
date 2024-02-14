<template>
  <div class="bg-[#9a584d] p-10">
    <div class="heading-title flex mb-10">
      <h1 class="text-3xl font-bold text-white">Payment Info</h1>
    </div>
    <div>
      <span class="font-bold text-white">Payment Method</span>
      <div class="flex mt-2">
        <el-button size="large" color="#030303" plain>
          Credit Card
        </el-button>
        <el-button size="large" color="#030303" plain>
          Paypal
        </el-button>
      </div>
    </div>
    <el-divider />
    <div>
      <el-form
        label-position="top"
        label-width="100px"
        :model="paymentForm"
      >
        <div class="mb-5">
          <span class="text-white font-bold">Cardholder Name</span>
          <div class="flex items-center border-b border-white py-2">
            <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-3 leading-tight focus:outline-none" type="text" v-model="paymentForm.name">
          </div>
        </div>
        <div class="mb-5">
          <span class="text-white font-bold">Card Number</span>
          <div class="flex items-center border-b border-white py-2">
            <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-3 leading-tight focus:outline-none" type="text" v-model="paymentForm.cardNumber">
          </div>
        </div>
        <div class="flex justify-between mb-10">
          <div class="w-2/3 mr-10">
            <span class="text-white">Expiration Date</span>
            <div class="flex items-center border-b border-white">
              <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-3 leading-tight focus:outline-none" placeholder="Month/Year" type="month" v-model="paymentForm.expirationDate">
            </div>
          </div>
          <div class="w-1/3">
            <span class="text-white">CVV</span>
            <div class="flex items-center border-b border-white">
              <input class="appearance-none bg-transparent border-none w-full text-white mr-3 py-3 leading-tight focus:outline-none" type="password" v-model="paymentForm.cvv">
            </div>
          </div>
        </div>
        <el-button class="w-full text-lg p-7" color="#030303" size="large" plain>Confirm and Pay ${{ total }}</el-button>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps(['total']);

const paymentForm = reactive({
  name: 'David Morrison',
  cardNumber: '443312345678',
  expirationDate: '',
  cvv: '',
});
</script>

<style>

</style>