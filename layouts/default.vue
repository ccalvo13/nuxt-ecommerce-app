<template>
  <div>
    <header>
      <ul>
        <li><nuxt-link to="/home">Home</nuxt-link></li>
        <li v-if="!authenticated" class="loginBtn" style="float: right">
          <nuxt-link to="/auth/login">Login</nuxt-link>
        </li>
        <li v-if="authenticated" class="loginBtn" style="float: right">
          <nuxt-link @click="logout">Logout</nuxt-link>
        </li>
      </ul>
    </header>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/stores/auth'; // import the auth store we just created

const router = useRouter();


const { logUserOut } = useAuthStore(); // use authenticateUser action from  auth store
const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const logout = () => {
  logUserOut();
  router.push('/auth/login');
};
</script>

<style>

</style>