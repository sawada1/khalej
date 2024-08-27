import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import "mosha-vue-toastify/dist/style.css";

export const useContactStore = defineStore("contact", () => {
const { locale } = useI18n();
  const { $axios } = useNuxtApp();
  const errors = ref({});
  const isLoading = ref(false);
  const isLoading2 = ref(true);
  const pendingState = ref(false);
  let total = ref();
  let page = ref(1);
let per_page = ref();
  const questions = ref([]);

  async function getContact(obj , resetForm ) {
    isLoading.value = true;
    try{
      let form = new FormData();
      form.append("name" , obj.name);
      form.append("phone" , `+966${obj.phone}`);
      form.append("email" , obj.email);
      form.append("message" , obj.message);
      const result = await $axios.post(`contact`, form);
      if (result.status >= 200) {
        isLoading.value = false;
        errors.value = undefined;
        const moshaToastify = await import("mosha-vue-toastify");
        const { createToast } = moshaToastify;
        createToast(
          locale.value == "ar"
            ? "تم التواصل بنجاح "
            : "Communication was successful",
          {
            toastBackgroundColor: "#2D9596",
            position: "top-right",
            type: "success",
            transition: "bounce",
            showIcon: "true",
            timeout: 3000,
          }
        );
        resetForm({
          values: {
            email: "",
            name: "",
            message: "",
          },
          errors: {},
        });
      }
    } catch(error){
      if(error.response){
        isLoading.value = false;
        errors.value = error.response.data.errors;
      }
    }
  }
  async function getQuestions() {
    try{
      const result = await $axios.get(`questions`,{
        params:{
          page: page.value
        }
      });
      if (result.status >= 200) {
        isLoading2.value = false;
        questions.value = [...questions.value , ...result.data.data];
        total.value = result.data.meta.total;
        per_page.value = result.data.meta.per_page;
      //   setTimeout(() => {
      //     isLoading2.value = true;
      // }, 500);
      }
    } catch(error){
      if(error.response){
        isLoading2.value = false;
      }
    }
  }


  return {
    errors,
    isLoading,
    pendingState,
    isLoading2,
    getContact,
    questions,
    page,
    total,
    per_page,
    getQuestions
  };
});