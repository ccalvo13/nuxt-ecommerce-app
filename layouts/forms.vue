<template>
  <div>
    <slot />
  </div>
  <div class="forms-layout">
    <el-container>
      <el-aside class="w-80">
        <HeadersFormsHeader />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>