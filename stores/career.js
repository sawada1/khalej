import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export const useCareerStore = defineStore("career", () => {
const { locale } = useI18n();
  const { $axios } = useNuxtApp();
  const errors = ref({});
  const isLoading = ref(false);
  const isLoading2 = ref(true);
  let active = ref();
  const pendingState = ref(false);
  const careers = ref([]);

  async function getContact(obj , resetForm , createToast , id , file) {
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
    try{
      const result = await $axios.get(`career`);
      if (result.status >= 200) {
        isLoading2.value = false;
        careers.value = result.data.data;
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
    active,
    getCareer
  };
});