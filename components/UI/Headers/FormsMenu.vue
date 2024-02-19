<template>
  <div class="p-10 border-x border-solid">
    <div class="flex justify-center">
      <img
        class="w-[40px]"
        src="/images/Icon paw.png"
        alt="Project logo"
      />
    </div>
    <el-menu
      class="forms-menu h-full"
      mode="vertical"
      :ellipsis="false"
      :router=true
    >
      <el-menu-item index="#">Categories</el-menu-item>
      <el-menu-item index="/products/details">Products</el-menu-item>
      <el-menu-item index="#">Cart</el-menu-item>
      <el-menu-item index="#">Account</el-menu-item>
      <div class="flex-grow"></div>
      <el-menu-item @click="logout">Logout</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { Search, ShoppingCart, User } from '@element-plus/icons-vue';

const logout = async () => {
  await navigateTo({ path: '/auth/login' })
};

</script>

<style>

</style>