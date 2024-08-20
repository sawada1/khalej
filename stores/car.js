import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const useCarStore = defineStore("car", () => {
  const { $axios } = useNuxtApp();
  const errors = ref({});
  const car = ref();
  const filteredCar = ref([]);
  const isLoading = ref(true);
  const isLoading2 = ref(true);
  const pendingState = ref(false);
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
    const result = await $axios.get(`car/search`,{
          params: {
            model_id: obj.model_id,
            brand_id: obj.brand_id,
            car_id: obj.car_id,
    }
    });
    if (result.status >= 200) {
      filteredCar.value = result.data;
      isLoading2.value = false;
    }
    // if(filteredCar.value.length < 1){
    //   pendingState.value = true;
    // }
    setTimeout(() => {
      isLoading2.value = true;
      // pendingState.value = false;
    }, 500);
  }

  return {
    errors,
    getCar,
    getSearchCars,
    filteredCar,
    isLoading,
    pendingState,
    isLoading2,
    car
  };
});
