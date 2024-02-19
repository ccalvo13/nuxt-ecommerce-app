<template>
  <div>
    <el-menu
      class="forms-menu h-full items-center"
      :ellipsis="false"
      mode="horizontal"
      :router=true
    >
      <div class="heading-title flex justify-center mb-10">
        <h1 class="text-3xl font-bold">{{ $route.meta.title }}</h1>
      </div>
      <div class="flex-grow"></div>
      <el-menu-item index="#">
        <el-button text :icon="User" />
      </el-menu-item>
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