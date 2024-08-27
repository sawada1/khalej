import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import "mosha-vue-toastify/dist/style.css";

export const useCompanyStore = defineStore("company", () => {
const { locale } = useI18n();
  const { $axios } = useNuxtApp();
  const errors = ref({});
  const errors2 = ref({});
  const isLoading = ref(false);
  const isLoading2 = ref(false);
  const pendingState = ref(false);

  async function getContact(obj , resetForm ) {
    isLoading.value = true;
    try{
      let form = new FormData();
      form.append("phone" , `+966${obj.phone}`);
      form.append("car_id" , obj.car_id);
      form.append("organization_name" , obj.organization_name);
      form.append("organization_location" , obj.organization_location);
      form.append("bank_id" , obj.bank_id);
      form.append("organization_activity" , obj.organization_activity);
      form.append("organization_seo" , obj.organization_seo);
      form.append("quantity" , obj.quantity);
      form.append("organization_email" , obj.organization_email);
    
      const result = await $axios.post(`company-finance`, form);
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
            city_id: "",
            organization_name: "",
            car_id: "",
            phone: "",
            bank_id: "",
            organization_location: "",
            organization_seo: "",
            quantity: "",
            organization_email: "",
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
  async function getContact2(obj , resetForm) {
    isLoading2.value = true;
    try{
      let form = new FormData();
      form.append("phone" , `+966${obj.phone}`);
      form.append("car_id" , obj.car_id);
      form.append("organization_name" , obj.organization_name);
      form.append("organization_seo" , obj.organization_seo);
      form.append("quantity" , obj.quantity);
      form.append("organization_email" , obj.organization_email);
      const result = await $axios.post(`company-cash`, form);
      if (result.status >= 200) {
        isLoading2.value = false;
        errors2.value = undefined;
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
            organization_name: "",
            car_id: "",
            organization_seo: "",
            quantity: "",
            phone: "",
            organization_email: "",
          },
          errors: {},
        });
      }
    } catch(error){
      if(error.response){
        isLoading2.value = false;
        errors2.value = error.response.data.errors;
      }
    }
  }


  return {
    errors,
    errors2,
    isLoading,
    pendingState,
    isLoading2,
    getContact,
    getContact2
  };
});