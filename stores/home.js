import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import "mosha-vue-toastify/dist/style.css";
export const useHomeStore = defineStore("home", () => {
  const { $axios } = useNuxtApp();
  const { locale , t } = useI18n();
  const errors = ref({});
  const errorsEdit = ref();
  const brands = ref([]);
  const cars = ref([]);
  const SearchCars = ref([]);
  const SearchModels = ref([]);
  const carsHome = ref([]);
  const models = ref([]);
  const banks = ref([]);
  const city = ref([]);
  const branches = ref([]);
  const chooseArr = ref([]);
  const brand = ref();
  const social = ref();
  const total = ref();
  const pendingShow = ref(false);
  const pendingSub = ref(false);
  const showBrand = ref();
  const websiteData = ref();
  const checkBrand = ref();
  const loading = ref(false);
  const loading2 = ref(false);
  const loadingEdit = ref(false);
  const errorSubmit = ref();
  const aboutUs = ref();
  const terms = ref();
  const errorSub = ref();
  const ipAddress = ref();
  const pendingAbout = ref(false);

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
    const result = await $axios.get("brands");
    if (result.status >= 200) {
      brands.value = result.data.data;
    }
  }

  // Fetch cars with caching logic
  async function getCars() {
    const result = await $axios.get("cars");
    if (result.status >= 200) {
      carsHome.value = result.data.data;
    }
  }
  async function getCarsByBrand(obj) {
    console.log(obj)
    if(obj?.length >= 1){
      const result = await $axios.get("BrandModel", {
        params: {
          brand_id: typeof obj == "object" ? [...obj] : [obj],
        },
      });
      if (result.status >= 200) {
        cars.value = result.data.cars;
        models.value = result.data.models;
      }
    } else{
      cars.value = [];
      models.value = [];
    }
  }
  async function getCarsByBrand2(obj) {
    const result = await $axios.get("BrandModel", {
      params: {
        brand_id: typeof obj == "object" ? [...obj] : [obj],
      },
    });
    if (result.status >= 200) {
      SearchCars.value = result.data.cars;
      SearchModels.value = result.data.models;
    }
  }
  async function getBranches() {
    const result = await $axios.get("branchs");
    if (result.status >= 200) {
      branches.value = result.data.data;
    }
  }
  async function getAbout() {
    pendingAbout.value = true;
    const result = await $axios.get("aboutUs");
    if (result.status >= 200) {
      pendingAbout.value = false;
      aboutUs.value = result.data.data;
      //   setTimeout(() => {
      //     pendingAbout.value = true;
      // }, 500);
    }
  }
  async function getSocial() {
    const result = await $axios.get("social");
    if (result.status >= 200) {
      social.value = result.data.data;
    }
  }
  async function getBanks() {
    const result = await $axios.get("banks");
    if (result.status >= 200) {
      banks.value = result.data.data;
    }
  }
  async function getTerms() {
    loading2.value = true;
    const result = await $axios.get("terms");
    if (result.status >= 200) {
      terms.value = result.data.data;
      loading2.value = false;
    }
  }
  async function getCities() {
    const result = await $axios.get("city");
    if (result.status >= 200) {
      city.value = result.data.data;
    }
  }
  async function getChoose() {
    const result = await $axios.get("chosseUs");
    if (result.status >= 200) {
      chooseArr.value = result.data.data;
    }
  }
  async function getWebsiteData() {
    const result = await $axios.get("websiteData");
    if (result.status >= 200) {
      websiteData.value = result.data.data;
    }
  }
  function getIpAddress() {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        ipAddress.value = data.ip;
      })
      .catch((error) => console.error("Error fetching IP address:", error));
  }
  async function subscriber(email) {
    try{
      const result = await $axios.post("subscriber/store" , {
      email:email
      });
      if (result.status >= 200) {
        pendingSub.value = true;
        const moshaToastify = await import("mosha-vue-toastify");
        const { createToast } = moshaToastify;
        errorSub.value = undefined;
        createToast(t('sub1'),
          {
            toastBackgroundColor: "#2D9596",
            position: "top-right",
            type: "success",
            transition: "bounce",
            showIcon: "true",
            timeout: 3000,
          }
        );
    }
    }catch(error){
      if(error.response){
        errorSub.value = error.response.data.errors;
        pendingSub.value = false;
      }
    }
  }

  // Fetch models with caching logic
  // async function getModels() {
  //   // if (process.client) {
  //   //   const cachedModels = loadFromStorage('models');
  //   //   if (cachedModels) {
  //   //     models.value = cachedModels;
  //   //   } else {
  //   //     const result = await $axios.get('models');
  //   //     if (result.status >= 200) {
  //   //       models.value = result.data.data;
  //   //       saveToStorage('models', models.value);
  //   //     }
  //   //   }
  //   // }

  //       const result = await $axios.get('models');
  //       if (result.status >= 200) {
  //         models.value = result.data.data;
  //       }
  // }

  return {
    errors,
    brands,
    cars,
    total,
    models,
    brand,
    pendingShow,
    pendingSub,
    loading,
    subscriber,
    showBrand,
    checkBrand,
    getIpAddress,
    ipAddress,
    websiteData,
    errorsEdit,
    getCarsByBrand,
    branches,
    SearchModels,
    getTerms,
    errorSub,
    terms,
    SearchCars,
    loading2,
    getAbout,
    aboutUs,
    pendingAbout,
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
    getCarsByBrand2,
    getCars,
    carsHome,
    // getModels,
    errorSubmit,
    loadingEdit,
  };
});
