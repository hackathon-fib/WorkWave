<template>
    <div class="p-5 flex flex-row">
        <div class="flex-grow p-10">
            <div class="flex p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 mr-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Updates</span>
            <div>
                <span class="font-medium">Keep up to date with your team:</span>
                <ul class="mt-1.5 ml-4 list-disc list-inside">
                    <li>Mark Sewrey updated the time of meeting “Regression Testing Catch Up” to 13:00</li>
                    <li>Sagar Reddy accepted your meeting request</li>
                    <li>Niall Kidd updated his location</li>
                </ul>
            </div>
            </div>
            <div class="text-right">
                <client-only>
                    <div class="relative max-w-sm mb-5">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                            </svg>
                        </div>
                        <input ref="datepickerEl" datepicker datepicker-autohide v-model="selectedDate" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date">
                    </div>
                </client-only>
            </div>
            <ww-gant-chart :users="users" :chosen-date="selectedDate" />
        </div>
        <card class="p-5">
            <label for="teams" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select an option
            </label>
            <select v-model="team" id="teams" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5">
                <option selected>Choose a team</option>
                <option v-for="(tVal, i) in teams" :key="i" :value="tVal.name">{{ tVal.name }}</option>
            </select>
            <ul>
                <li v-for="(vUser, i) in users" key="i" class="mb-5">
                    <label class="relative inline-flex items-center mb-3 cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer">
                        <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    <img class="w-10 h-10 rounded-full inline-flex ml-3" :src="`https://source.unsplash.com/random?user_avatar?rnd=${Math.random()}`" alt="">
                    <div class="font-medium dark:text-white">
                        <div></div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">{{ `${vUser.firstName} ${vUser.lastName}` }}</div>
                    </div>
                </li>
            </ul>
            <button @click="loadMeetingModal" type="button" class="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="w-3.5 h-3.5 text-white mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
                Schedule Meeting
            </button>
        </card>
    </div>
</template>

<script setup lang="ts">
import Datepicker from 'flowbite-datepicker/Datepicker';

import { computed, onMounted } from 'vue';
import { useUserStore } from '../stores/user';
import { useUsersStore } from '../stores/users';

const userStore = useUserStore();
const usersStore = useUsersStore();
const team = ref('')
const showMeetingModal = ref(false);
const selectedDate = ref('');
const datepickerEl = ref(null);

// const teams = computed(() => {
//     return ['feeditback', 'yoodee', 'product other', 'front-end', 'back-end', 'testers'];
// });

// onMounted(() => {
//     new Datepicker(datepickerEl, {

//     });
// })

const loadMeetingModal = () => {
    showMeetingModal.value = true;
}

const { data: users } = useAsyncData<any>(
  "users",
  () => usersStore.getUsers(),
  {
    watch: [team]
  }
);

const { data: teams } = await useAsyncData<any>(
    'teams',
  () => usersStore.getTeams()
);

definePageMeta({
//   validate: async (route) => {
//     // Check if the id is made up of digits
//     if (!userStore.accessToken) {
//         return false;
//     }
//   }
})
</script>