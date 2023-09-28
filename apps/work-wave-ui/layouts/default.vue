<template>
  <div class="flex flex-row">
    <ww-sidebar v-if="currentRouteName !== 'login'"/>

    <div class="w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

onMounted(() => {
  initFlowbite();
});

const router = useRouter();

const currentRouteName = router.currentRoute.value.name;
</script>

<style scoped>
body {
  --text-color: #606462;
  --text-secondary-color: #EDF0EE;
  --primary-color: #00493A;
  --primary-color-text: #EDF0EE;
  /* --mask-bg: ; */
  --highlight-bg: #00735C;
  --highlight-text-color: #EDF0EE;
}
</style>