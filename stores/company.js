import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import "mosha-vue-toastify/dist/style.css";

export const useCompanyStore = defineStore("company", () => {
const { locale , t } = useI18n();
  const { $axios } = useNuxtApp();
  const errors = ref({});
  const errors2 = ref({});
  const isLoading = ref(false);
  const isLoading2 = ref(false);
  const pendingState = ref(false);
  const paymentOtp = ref(1);
  const checkOtp = ref(1);
  const pendingOtp1 = ref(false);
  const phone1 = ref("");
  const phone2 = ref("");
  const otp1 = ref('');
  const otp2 = ref('');
  const orderInd1 = ref('');
  const changeStat2 = ref(1);

  const getToast = async(message) =>{
    const moshaToastify = await import("mosha-vue-toastify");
    const { createToast } = moshaToastify;
    createToast(t(message),
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

  async function getContact(obj , resetForm ) {
    isLoading.value = true;
    phone1.value = `+966${obj.phone}`;
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
        getToast('sendOtp');
        isLoading.value = false;
        errors.value = undefined;
        checkOtp.value = 2;
        otp1.value = result.data?.otp;
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
    phone1.value = `+966${obj.phone}`;
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
        getToast('sendOtp');
        isLoading2.value = false;
        errors2.value = undefined;
        checkOtp.value = 2;
        otp1.value = result.data?.otp;
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
  const sendOtp = async (otp) => {
    let formBody = new FormData();
    formBody.append("otp", otp);
    formBody.append("mobile", phone1.value);
    // formBody.append("order_id", orderInd1.value);
    try {
      let result = await $axios.post(`valid/otp`, formBody);
      if (result.status >= 200) {
        getToast('sendOrder');
        changeStat2.value = 2;
        // checkOtp.value = 1;
        paymentOtp.value = 2;
        otp1.value = '';
        phone1.value = '';
        pendingOtp1.value = false;
        // error1.value = '';
    
      }
    } catch (errorss) {
      console.log(errorss);
      if (errorss.response) {
        pendingOtp1.value = false;
        // error1.value = errorss.response.data.errors;
      }
    }
  }
  const reSendOtp = async () => {
    let formBody = new FormData();
    formBody.append("phone", phone1.value);
    try {
      let result = await $axios.post(`resend/otp`, formBody);
      if (result.status >= 200) {
        getToast('resendOtp');
        otp1.value = result.data;
        
    
      }
    } catch (errorss) {
      console.log(errorss);
      if (errorss.response) {
        pendingOtp1.value = false;
        // error1.value = errorss.response.data.errors;
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
    getContact2,
    reSendOtp,
    getContact,
    checkOtp,
    paymentOtp,
    pendingOtp1,
    changeStat2,
    phone1,
    orderInd1,
    otp1,
    sendOtp,
    getContact2
  };
});