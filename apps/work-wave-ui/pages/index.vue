
<template>
  <h1>Index</h1>
</template>

<script setup lang="ts">
import { useUserStore } from '../stores/user';

const userStore = useUserStore();

definePageMeta({
  validate: async (route) => {
    // Check if the id is made up of digits
    if (!userStore.accessToken) {
        return false;
    }
  }
})
</script>


<style scoped>

</style>../stores/user