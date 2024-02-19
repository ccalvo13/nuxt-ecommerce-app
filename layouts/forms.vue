<template>
  <div class="forms-layout h-full">
    <el-container>
      <el-aside class="w-80">
        <UIHeadersFormsMenu />
      </el-aside>
      <el-container>
        <el-header>
          <UIHeadersFormsHeader />
        </el-header>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>