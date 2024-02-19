<template>
  <div>
    <!-- FOR LARGE SCREENS -->
    <div class="el-menu-demo hidden sm:block">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        :router=true
      >
        <el-menu-item>
          <img
            class="w-[40px]"
            src="/images/Icon paw.png"
            alt="Project logo"
          />
        </el-menu-item>
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/products">Products</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="#">
          <el-button text :icon="Search" />
        </el-menu-item>
        <el-menu-item index="/cart">
          <el-button text :icon="ShoppingCart" />
        </el-menu-item>
        <el-menu-item index="#">
          <el-button text :icon="User" />
        </el-menu-item>
        <el-menu-item @click="logout">Logout</el-menu-item>
      </el-menu>
    </div>

    <!-- FOR SMALL SCREENS -->
    <div class="el-menu-demo sm:hidden">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        :router=true
      >
        <el-menu-item>
          <img
            class="w-[40px]"
            src="/images/Icon paw.png"
            alt="Project logo"
          />
        </el-menu-item>
        <div class="flex-grow"></div>
        <el-menu-item index="#">
          <el-button
            class="navbar-burger flex items-center text-blue-600 p-3"
            @click="visible = true"
          >
            <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </el-button>
        </el-menu-item>
      </el-menu>
      <el-drawer v-model="visible" :show-close="false" size="50%">
        <template #header="{ titleId }">
          <div :id="titleId" class="mx-4">
            <img
              class="w-[40px]"
              src="/images/Icon paw.png"
              alt="Project logo"
            />
          </div>
        </template>
        <el-menu
          class="el-menu-demo"
          mode="vertical"
          :ellipsis="false"
          :router=true
        >
          <el-menu-item index="/">Home</el-menu-item>
          <el-menu-item index="/products">Products</el-menu-item>
          <el-menu-item index="#">Search</el-menu-item>
          <el-menu-item index="/cart">Cart</el-menu-item>
          <el-menu-item index="#">Account</el-menu-item>
          <el-menu-item @click="logout">Logout</el-menu-item>
        </el-menu>
      </el-drawer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Search, ShoppingCart, User } from '@element-plus/icons-vue';
const { signOut } = useAuth();

const visible = ref(false);

const logout = async () => {
  await navigateTo({ path: '/auth/login' })
};
</script>

<style>

</style>