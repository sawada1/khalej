import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import "mosha-vue-toastify/dist/style.css";

export const useCarStore = defineStore("car", () => {
  const { $axios } = useNuxtApp();
  const errors = ref({});
const { locale , t } = useI18n();
  const car = ref();
  const prices = ref();
  const filteredCar = ref([]);
  const favsArr = ref([]);
  const isLoading = ref(true);
  const isLoading2 = ref(true);
  const isLoading3 = ref(false);
  const isLoading4 = ref(true);
  const pendingState = ref(false);
  let total = ref();
  let page = ref(1);
let per_page = ref();
let itemsPerPage = ref();
  // let value1 = ref(locale.value == 'ar' ? " تم الاضافة الي قائمة المفضلات " : " Added to Favorites list ");
  // let value2 = ref(locale.value == 'ar' ? " تم الحذف من قائمة المفضلات " : " Removed from Favorites list ");
  async function getCar(id) {
    const result = await $axios.get(`car/${id}`);
    if (result.status >= 200) {
      car.value = result.data.data;
      isLoading.value = false;
    }
    setTimeout(() => {
      isLoading.value = true;
    }, 500);
  }
  async function getSearchCars(obj) {
    isLoading3.value = true;
    // filteredCar.value = [];
    const result = await $axios.get(`car/search`, {
      params: {
        page: page.value,
        model_id:typeof obj.model_id == "object" ? [...obj.model_id] : [obj.model_id],
        brand_id:typeof obj.model_id == "object" ? [...obj.brand_id] : [obj.brand_id],
        car_id:typeof obj.model_id == "object" ? [...obj.car_id] : [obj.car_id],
        min_price: obj.min_price ,
        max_price: obj.max_price,
      },
    });
    if (result.status >= 200) {
      if(result.data.data.length == 0){
        filteredCar.value = [];
      } else{
        filteredCar.value = [...filteredCar.value , ...result.data.data];
      }
      isLoading2.value = false;
      isLoading3.value = false;
      total.value = result.data.meta.total;
      per_page.value = result.data.meta.per_page;
      itemsPerPage.value = result.data.meta.to;
    }
  }
  async function AddFav(id , favBtn , check=false , ip='') {
    const result = await $axios.post(`add-favorite-withoutauth`, { car_id: id });
    if (result.status >= 200) {
      const moshaToastify = await import("mosha-vue-toastify");
      const { createToast } = moshaToastify;
      createToast(favBtn ? t("wishlist1") : t("wishlist2"),
        {
          toastBackgroundColor: "#2D9596",
          position: "top-right",
          type: "success",
          transition: "bounce",
          showIcon: "true",
          timeout: 3000,
        }
      );
      if(check){
        getFav(ip);
      }
    }
  }
  async function getFav(ip) {
    const result = await $axios.get(`user/car`, {
      params:{
        device_ip: ip
      }
    });
    if (result.status >= 200) {
      isLoading4.value = false;
      favsArr.value = result.data.data;
    }
  }
  async function gePrices() {
    const result = await $axios.get(`prices`);
    if (result.status >= 200) {
      isLoading4.value = false;
      prices.value = result.data;
    }
  }

  return {
    errors,
    getCar,
    getSearchCars,
    filteredCar,
    isLoading,
    pendingState,
    isLoading2,
    isLoading3,
    gePrices,
    prices,
    itemsPerPage,
    isLoading4,
    AddFav,
    page,
    per_page,
    total,
    car,
    getFav,
    favsArr

  };
});
