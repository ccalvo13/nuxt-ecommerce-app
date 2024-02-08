<template>
  <div>
    <Header />
    <slot />
  </div>
</template>

<script lang="ts" setup>
const { signOut } = useAuth()

const logout = async () => {
  await navigateTo({ path: '/auth/login' })
};
</script>

<style>

</style>