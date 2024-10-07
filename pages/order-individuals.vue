<template>
  <div  class="container" style="min-height: 75vh">
    <div v-if="store.checkOtp == 1" class="container order-finance-container">
      <div class="header">
        <h1> {{ $t('reqOrd') }} </h1>
        <nuxt-link :to="localePath('/')">
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
        <indFinance :cars="cars" :id="id" />
       </div>
       <div v-if="activeBtn == 2">
        <indCash :cars="cars" :id="id" />
       </div>
    </div>
    <otpContainer v-if="store.checkOtp == 2" :changeStat2="changeStat2Val" :reSendOtp="store.reSendOtp" :sendOtp="store.sendOtp" :otp="otpValue" style="margin-top: 80px;"/>
  </div>
</template>

<script setup>
import { useHomeStore } from "@/stores/home";
import { useindividualsStore } from "@/stores/individuals";
const route = useRoute();
let id = ref(route.query.id);
let nameCar = ref(route.query.name);
let activeBtn = ref(1);
const { locale } = useI18n();
const localePath = useLocalePath();
let store2 = useHomeStore();
let store = useindividualsStore();
const otpValue = computed(() => store.otp1);
const changeStat2Val = computed(() => store.changeStat2);
const checkOtpVal = computed(() => store.checkOtp);
store2.getCars();
store2.getBanks();
store2.getCities();
let cars = ref(store2.carsHome);
useSeoMeta({
  title: locale.value == 'ar' ? ' طلب شراء ' : " Purchase order ",
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
});
watch(
  [() => store2.carsHome],
  ([val1]) => {
    cars.value = val1;
  }
);

</script>
