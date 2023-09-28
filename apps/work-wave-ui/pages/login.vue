<template>
  <div class="surface-card p-4 shadow-2 border-round w-3/4 h-full mx-auto">
    <div class="text-center mb-5">
        <img src="assets/logo.png" alt="Image" height="50" class="mb-3">
        <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
    </div>

    <div>
        <div class="mb-5">
            <label for="email1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" id="email1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@email.com" required>
        </div>

        <div class="mb-5">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="********" required>
        </div>
        <!-- <div class="text-right">
            <a class="font-medium no-underline text-blue-500 cursor-pointer">
              Forgot password?
            </a>
        </div> -->

        <Button label="Sign In" icon="pi pi-user" class="w-full" @click="submit"></Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

const username = ref('');
const password = ref('');

const submit = async () => {
  await userStore.login(username.value, password.value);
}
</script>