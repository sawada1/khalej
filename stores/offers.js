import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const useOfferStore = defineStore("offers", () => {
  const { $axios } = useNuxtApp();

  const errors = ref({});
  const offer = ref();
  const isLoading = ref(true);
  const isLoading2 = ref(true);
  const offers = ref([]);
  async function getOffer(id) {
    
    const result = await $axios.get(`offer/show/${id}`);
    if (result.status >= 200) {
        offer.value = result.data.data;
        isLoading2.value = false;
    }
    setTimeout(() => {
        isLoading2.value = true;
    }, 500);
  }
  async function getOffers() {
    // isLoading.value = true;
    const result = await $axios.get(`offers`);
    if (result.status >= 200) {
        offers.value = result.data.data;
        isLoading.value = false;
    }
    setTimeout(() => {
        isLoading.value = true;
    }, 500);
  }

  return {
    errors,
    isLoading,
    isLoading2,
    getOffer,
    getOffers,
    offers,
    offer
  };
});