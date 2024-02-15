<template>
  <div class="signup-container flex h-full justify-center items-center px-6 py-12 lg:px-8">
      <div class="w-6/12">
          <h1 class="title text-center text-[30px] font-bold m-4">Sign Up</h1>
          <p class="text-center mb-10 text-gray-500">Discover endless shopping options</p>
          <el-form label-position="top" ref="signupForm" :model="user" :rules="signupRules">
              <el-form-item label="Enter your email" prop="email">
                  <el-input size="large" v-model="user.email" autocomplete="off" :suffix-icon="Message"></el-input>
              </el-form-item>
              <el-form-item label="Enter your username" prop="username">
                  <el-input size="large" v-model="user.username" autocomplete="off" :suffix-icon="Message"></el-input>
              </el-form-item>
              <el-form-item label="Password" prop="password">
                  <el-input size="large" v-model="user.password" type="password" autocomplete="off" :suffix-icon="Hide"></el-input>
              </el-form-item>
              <el-form-item label="Enter your first name">
                  <el-input size="large" v-model="user.name.firstname" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="Enter your last name">
                  <el-input size="large" v-model="user.name.lastname" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button color="#9a584d" size="large" class="w-full" type="primary" :loading="loading" @click="signup(signupForm)">Sign Up</el-button>
              </el-form-item>
          </el-form>
          <el-alert v-if="signupError" title="Invalid signup" type="error"
              description="Please check your credentials and try again." />
          <div class="text-center my-10 text-gray-500">
              <el-button type="info" link><nuxt-link to="/auth/login">Already have an account? Log In</nuxt-link></el-button>
          </div>
      </div>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
// import { useAuthStore } from '~/stores/auth'; // import the auth store we just created
import { Message, Hide } from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus';
const { signUp } = useAuth()
let loading = ref(false);

definePageMeta({
title: 'Signup',
layout: 'auth',
public: true,
})

// const { registerUser } = useAuthStore(); // use authenticateUser action from  auth store
const router = useRouter();

// const { userCreated, loading } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  email: 'John@gmail.com',
  username: 'johnd', 
  password: 'm38rmF$',
  name: {
    firstname: 'John',
    lastname: 'Doe',
  },
  address: {
    city:'kilcoole',
    street:'7835 new road',
    number:3,
    zipcode:'12926-3874',
    geolocation:{
        lat:'-37.3159',
        long:'81.1496'
    }
  },
  phone:'1-570-236-7033'
});

const signupForm = ref<FormInstance>()

const signupRules = {
  username: [{ required: true, message: 'Please enter your username', trigger: 'blur' }],
  password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
  email: [{ required: true, message: 'Please enter your email', trigger: 'blur' }],
  firstname: [{ required: true, message: 'Please enter your firstname', trigger: 'blur' }],
  lastname: [{ required: true, message: 'Please enter your lastname', trigger: 'blur' }],
};

const signupError = ref(false);

const signup = async (formInstance: FormInstance | undefined) => {
    if (!formInstance) return;
    loading.value = true;
    signupError.value = false;
    formInstance.validate(async (valid: boolean) => {
        if (valid) {
            await signUp(
                { ...user.value },
                { callbackUrl: '/auth/login'}
            )
            loading.value = false;
        } else {
            signupError.value = true;
        }
    });
};
</script>