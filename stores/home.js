import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from '#app';

export const useHomeStore = defineStore("home", () => {
  const { $axios } = useNuxtApp();

  const errors = ref({});
  const errorsEdit = ref();
  const brands = ref([]);
  const cars = ref([]);
  const models = ref([]);
  const banks = ref([]);
  const city = ref([]);
  const branches = ref([]);
  const chooseArr = ref([]);
  const brand = ref();
  const social = ref();
  const total = ref();
  const pendingShow = ref(false);
  const showBrand = ref();
  const websiteData = ref();
  const checkBrand = ref();
  const loading = ref(false);
  const loadingEdit = ref(false);
  const errorSubmit = ref();

  const CACHE_EXPIRATION = 300000; // 5 minutes in milliseconds

  // Utility function to save data to localStorage
  function saveToStorage(key, data) {
    const timestamp = new Date().getTime();
    localStorage.setItem(key, JSON.stringify({ data, timestamp }));
  }

  // Utility function to load data from localStorage
  function loadFromStorage(key) {
    const cached = localStorage.getItem(key);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (new Date().getTime() - timestamp < CACHE_EXPIRATION) {
        return data;
      }
    }
    return null;
  }

  // Fetch brands with caching logic
  async function getBrands() {
    // if (process.client) {
    //   const cachedBrands = loadFromStorage('brands');
    //   if (cachedBrands) {
    //     brands.value = cachedBrands;
    //   } else {
    //     const result = await $axios.get('brands');
    //     if (result.status >= 200) {
    //       brands.value = result.data.data;
    //       saveToStorage('brands', brands.value);
    //     }
    //   }
    // }

         const result = await $axios.get('brands');
        if (result.status >= 200) {
          brands.value = result.data.data;
        }
  }

  // Fetch cars with caching logic
  async function getCars() {
    // if (process.client) {
    //   const cachedCars = loadFromStorage('cars');
    //   if (cachedCars) {
    //     cars.value = cachedCars;
    //   } else {
    //     const result = await $axios.get('cars');
    //     if (result.status >= 200) {
    //       cars.value = result.data.data;
    //       saveToStorage('cars', cars.value);
    //     }
    //   }
    // }

         const result = await $axios.get('cars');
        if (result.status >= 200) {
          cars.value = result.data.data;
        }
  }
  async function getBranches() {
         const result = await $axios.get('branchs');
        if (result.status >= 200) {
          branches.value = result.data.data;
        }
  }
  async function getSocial() {
         const result = await $axios.get('social');
        if (result.status >= 200) {
          social.value = result.data.data;
        }
  }
  async function getBanks() {
         const result = await $axios.get('banks');
        if (result.status >= 200) {
          banks.value = result.data.data;
        }
  }
  async function getCities() {
         const result = await $axios.get('city');
        if (result.status >= 200) {
          city.value = result.data.data;
        }
  }
  async function getChoose() {
         const result = await $axios.get('chosseUs');
        if (result.status >= 200) {
          chooseArr.value = result.data.data;
        }
  }
  async function getWebsiteData() {
         const result = await $axios.get('websiteData');
        if (result.status >= 200) {
          websiteData.value = result.data.data;
        }
  }

  // Fetch models with caching logic
  async function getModels() {
    // if (process.client) {
    //   const cachedModels = loadFromStorage('models');
    //   if (cachedModels) {
    //     models.value = cachedModels;
    //   } else {
    //     const result = await $axios.get('models');
    //     if (result.status >= 200) {
    //       models.value = result.data.data;
    //       saveToStorage('models', models.value);
    //     }
    //   }
    // }

        const result = await $axios.get('models');
        if (result.status >= 200) {
          models.value = result.data.data;
        }
  }

  return {
    errors,
    brands,
    cars,
    total,
    models,
    brand,
    pendingShow,
    loading,
    showBrand,
    checkBrand,
    websiteData,
    errorsEdit,
    branches,
    city,
    getWebsiteData,
    getSocial,
    getBanks,
    getCities,
    getChoose,
    chooseArr,
    banks,
    social,
    getBranches,
    getBrands,
    getCars,
    getModels,
    errorSubmit,
    loadingEdit,
  };
});
