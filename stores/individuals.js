import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

export const useindividualsStore = defineStore("individuals", () => {
const { locale } = useI18n();
  const { $axios } = useNuxtApp();
  const errors = ref({});
  const isLoading = ref(false);
  const isLoading2 = ref(false);
  const pendingState = ref(false);

  async function getContact(obj , resetForm , createToast) {
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
        createToast(
          locale.value == "ar"
            ? "تم التواصل بنجاح "
            : "Communication was successful",
          {
            toastBackgroundColor: "#dcba95",
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


  return {
    errors,
    isLoading,
    pendingState,
    isLoading2,
    getContact
  };
});