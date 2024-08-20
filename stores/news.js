import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";

export const useNewStore = defineStore("news", () => {
  const { $axios } = useNuxtApp();

  const errors = ref({});
  const newItem = ref();
  const isLoading = ref(true);
  const isLoading2 = ref(true);
  const news = ref([]);
  async function getNew(id) {
    
    const result = await $axios.get(`news/show/${id}`);
    if (result.status >= 200) {
        newItem.value = result.data.data;
        isLoading2.value = false;
    }
    setTimeout(() => {
        isLoading2.value = true;
    }, 500);
  }
  async function getNews() {
    // isLoading.value = true;
    const result = await $axios.get(`news`);
    if (result.status >= 200) {
        news.value = result.data.data;
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
    getNews,
    getNew,
    news,
    newItem
  };
});