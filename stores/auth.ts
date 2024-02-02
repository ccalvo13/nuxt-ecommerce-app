import { defineStore } from 'pinia';

interface UserPayloadInterface {
  username: string;
  password: string;
}

interface NewUserPayloadInterface {
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  },
  address: {
    street: string;
    city: string;
    number: number;
    geolocation: {
      lat: string;
      long: string;
    };
    zip: string;
  },
  phone: string;
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authenticated: false,
    loading: false,
    userCreated: false,
  }),
  actions: {
    async authenticateUser({ username, password }: UserPayloadInterface) {
      // useFetch from nuxt 3
      const { data, pending }: any = await useFetch('https://fakestoreapi.com/auth/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          username,
          password,
        },
      });
      this.loading = pending;

      if (data.value) {
        const token = useCookie('token'); // useCookie new hook in nuxt 3
        token.value = data?.value?.token; // set token to cookie
        this.authenticated = true; // set authenticated  state value to true
      }
    },
    logUserOut() {
      const token = useCookie('token'); // useCookie new hook in nuxt 3
      this.authenticated = false; // set authenticated  state value to false
      token.value = null; // clear the token cookie
    },
    async registerUser({ email, username, password, name, address, phone }: NewUserPayloadInterface) {
      const { data, pending }: any = await useFetch('https://fakestoreapi.com/users', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: {
          email,
          username,
          password,
          name,
          address,
          phone,
        },
      });
      this.loading = pending;

      console.log('sign up', data);

      if (data.value) {
        this.userCreated = true;
      }
    }
  },
});