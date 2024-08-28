import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import "mosha-vue-toastify/dist/style.css";

export const useCareerStore = defineStore("career", () => {
const { locale } = useI18n();
  const { $axios } = useNuxtApp();
  const errors = ref({});
  const isLoading = ref(false);
  const isLoading2 = ref(true);
  const isLoading3 = ref(false);
  let active = ref();
  const pendingState = ref(false);
  const careers = ref([]);
  let total = ref();
  let page = ref(1);
let per_page = ref();

  async function getContact(obj , resetForm , id , file) {
    isLoading.value = true;
    try{
      let form = new FormData();
      form.append("name" , obj.name);
      form.append("phone" , `+966${obj.phone}`);
      form.append("email" , obj.email);
      form.append("cv" , obj.cv);
      const result = await $axios.post(`career/store/${id}`, form);
      if (result.status >= 200) {
        isLoading.value = false;
        errors.value = undefined;
        file = null;
        console.log(file);
        active.value = false;
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
            cv: "",
            phone: "",
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
  async function getCareer() {
    isLoading3.value = true;
    try{
      const result = await $axios.get(`career`,{
        params:{
          page: page.value 
        }
      });
      if (result.status >= 200) {
        isLoading2.value = false;
        careers.value = [...careers.value , ...result.data.data];
        total.value = result.data.meta.total;
        per_page.value = result.data.meta.per_page;
        isLoading3.value = false;
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
    careers,
    total,
    isLoading3,
    per_page, 
    page,
    active,
    getCareer
  };
});