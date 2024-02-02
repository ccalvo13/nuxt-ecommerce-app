<template>
  <div>
    <div class="h-screen">
      <el-container class="h-full">
        <el-aside width="50%">
          <div class="bg-cover h-full w-full" style="background-image: url('/login.png')"></div>
        </el-aside>
        <el-main>
          <slot />
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>