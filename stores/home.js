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
  const brand = ref();
  const total = ref();
  const pendingShow = ref(false);
  const showBrand = ref();
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
    if (process.client) {
      const cachedBrands = loadFromStorage('brands');
      if (cachedBrands) {
        brands.value = cachedBrands;
      } else {
        const result = await $axios.get('brands');
        if (result.status >= 200) {
          brands.value = result.data.data;
          saveToStorage('brands', brands.value);
        }
      }
    }
  }

  // Fetch cars with caching logic
  async function getCars() {
    if (process.client) {
      const cachedCars = loadFromStorage('cars');
      if (cachedCars) {
        cars.value = cachedCars;
      } else {
        const result = await $axios.get('cars');
        if (result.status >= 200) {
          cars.value = result.data.data;
          saveToStorage('cars', cars.value);
        }
      }
    }
  }

  // Fetch models with caching logic
  async function getModels() {
    if (process.client) {
      const cachedModels = loadFromStorage('models');
      if (cachedModels) {
        models.value = cachedModels;
      } else {
        const result = await $axios.get('models');
        if (result.status >= 200) {
          models.value = result.data.data;
          saveToStorage('models', models.value);
        }
      }
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
    errorsEdit,
    getBrands,
    getCars,
    getModels,
    errorSubmit,
    loadingEdit,
  };
});
