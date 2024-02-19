<template>
    <div class="login-container flex h-full justify-center items-center px-6 py-12 lg:px-8">
        <div class="w-6/12">
            <h1 class="title text-center text-[30px] font-bold m-4">Log In</h1>
            <p class="text-center mb-10 text-gray-500">Discover endless shopping options</p>
            <el-form label-position="top" ref="loginForm" :model="user" :rules="loginRules">
                <el-form-item label="Enter your username" prop="username">
                    <el-input size="large" v-model="user.username" autocomplete="off" :suffix-icon="Message"></el-input>
                </el-form-item>
                <el-form-item label="Password" prop="password">
                    <el-input size="large" v-model="user.password" type="password" autocomplete="off" :suffix-icon="Hide"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button color="#9a584d" size="large" class="w-full" type="primary" :loading="loading" @click="login(loginForm)">Sign In</el-button>
                </el-form-item>
            </el-form>
            <el-alert v-if="loginError" title="Invalid login" type="error"
                description="Please check your credentials and try again." />
            <div class="text-center my-10 text-gray-500">
                <el-button type="info" link @click.prevent="signup">Don't have an account yet? Sign up</el-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Message, Hide } from '@element-plus/icons-vue'
import type { FormInstance } from 'element-plus';
const { signIn } = useAuth()

let loading = ref(false);

definePageMeta({
  title: 'Login',
  layout: 'auth',
  public: true,
})

const user = ref({
    username: 'mor_2314', 
    password: '83r5^_',
    // password: 'hunter2',
});

const loginForm = ref<FormInstance>()

const loginRules = {
    username: [{ required: true, message: 'Please enter your username', trigger: 'blur' }],
    password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
};

const loginError = ref(false);

const login = async (formInstance: FormInstance | undefined) => {
    if (!formInstance) return;

    loading.value = true;
    loginError.value = false;
    formInstance.validate(async (valid: boolean) => {
        if (valid) {
            await signIn(
                { ...user.value },
                { callbackUrl: '/' }
            )

            loading.value = false;
        } else {
            loginError.value = true;
        }
    });
};

const signup = async () => {
  await navigateTo({ path: '/auth/signup' })
};

</script>