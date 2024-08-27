<template>
  <div class="container" style="min-height: 100vh">
    <div class="container order-finance-container">
      <div class="header">
        <h1> {{ $t('reqOrd') }} </h1>
        <nuxt-link to="/">
          <svg
          class="arrowDir"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
              stroke="#363F4D"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20.4999 12H3.66992"
              stroke="#363F4D"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </nuxt-link>
      </div>
      <div class="btn-container">
        <button @click="activeBtn = 1" :class="{ active: activeBtn == 1 }">
           {{ $t('finance') }}
        </button>
        <button @click="activeBtn = 2" :class="{ active: activeBtn == 2 }">
          {{ $t('cash') }}
        </button>
      </div>
      <div v-if="activeBtn == 1">
        <companyFinance :cars="cars" />
      </div>
      <div v-if="activeBtn == 2">
       <companyCash  :cars="cars"/>
      </div>
    </div>
  </div>
</template>

<script setup>
let activeBtn = ref(1);
import { useHomeStore } from "@/stores/home";
let store2 = useHomeStore();
store2.getCars();
store2.getBanks();
let cars = ref(store2.cars);

watch(
  [() => store2.cars],
  ([val1]) => {
    cars.value = val1;
  }
);

</script>
