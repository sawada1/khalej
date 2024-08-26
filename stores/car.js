import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export const useCarStore = defineStore("car", () => {
  const { $axios } = useNuxtApp();
  const errors = ref({});
const { locale } = useI18n();
  const car = ref();
  const filteredCar = ref([]);
  const favsArr = ref([]);
  const isLoading = ref(true);
  const isLoading2 = ref(true);
  const isLoading3 = ref(false);
  const isLoading4 = ref(true);
  const pendingState = ref(false);
  let value1 = ref(locale.value == 'ar' ? " تم الاضافة الي قائمة المفضلات " : " Added to Favorites list ");
  let value2 = ref(locale.value == 'ar' ? " تم الحذف من قائمة المفضلات " : " Removed from Favorites list ");
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
    filteredCar.value = [];
    const result = await $axios.get(`car/search`, {
      params: {
        model_id:
          typeof obj.model_id == "object" ? [...obj.model_id] : [obj.model_id],
        brand_id:
          typeof obj.model_id == "object" ? [...obj.brand_id] : [obj.brand_id],
        car_id:
          typeof obj.model_id == "object" ? [...obj.car_id] : [obj.car_id],
      },
    });
    if (result.status >= 200) {
      filteredCar.value = result.data.data;
      isLoading2.value = false;
      isLoading3.value = false;
    }
    // if(filteredCar.value.length < 1){
    //   pendingState.value = true;
    // }
    // setTimeout(() => {
    //   isLoading2.value = true;
    //   // pendingState.value = false;
    // }, 500);
  }
  async function AddFav(id , favBtn) {
    const result = await $axios.post(`add-favorite-withoutauth`, { car_id: id });
    if (result.status >= 200) {
      createToast(favBtn ? value1.value : value2.value,
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
  }
  async function getFav() {
    const result = await $axios.get(`favorite/all`);
    if (result.status >= 200) {
      isLoading4.value = false;
      favsArr.value = result.data.data;
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
    isLoading4,
    AddFav,
    car,
    getFav,
    favsArr

  };
});
