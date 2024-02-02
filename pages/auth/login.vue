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
                    <el-button color="#9a584d" size="large" class="w-full" type="primary" :loading="loading" @click.prevent="login">Sign In</el-button>
                </el-form-item>
            </el-form>
            <el-alert v-if="loginError" title="Invalid login" type="error"
                description="Please check your credentials and try again." />
            <div class="text-center my-10 text-gray-500">
                <el-button type="info" link><nuxt-link to="/auth/signup">Don't have an account yet? Sign up</nuxt-link></el-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/stores/auth'; // import the auth store we just created
import { Message, Hide } from '@element-plus/icons-vue'

definePageMeta({
  title: 'Login',
  layout: 'auth',
  public: true,
})

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store
const router = useRouter();

const { authenticated, loading } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
    username: 'mor_2314', 
    password: '83r5^_',
});

const loginForm = ref<FormInstance>()

const loginRules = {
    username: [{ required: true, message: 'Please enter your username', trigger: 'blur' }],
    password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
};

const loginError = ref(false);

const login = async () => {
    loginError.value = false;
    (loginForm.value as any).validate(async (valid: boolean) => {
        await authenticateUser(user.value); // call authenticateUser and pass the user object
        if (valid && authenticated) {
            // redirect to homepage if user is authenticated
            router.push('/home');
        } else {
            loginError.value = true;
        }
    });
};
</script>