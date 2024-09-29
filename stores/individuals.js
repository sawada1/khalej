import { ref, onMounted, watch } from "vue";
import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
import "mosha-vue-toastify/dist/style.css";

export const useindividualsStore = defineStore("individuals", () => {
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
  async function getContact(obj , resetForm) {
    isLoading.value = true;
    phone1.value = `+966${obj.phone}`;
    try{
      let form = new FormData();
      form.append("name" , obj.name);
      form.append("phone" , `+966${obj.phone}`);
      form.append("salary" , obj.salary);
      form.append("car_id" , obj.car_id);
      form.append("price" , obj.price);
      form.append("commitments" , obj.commitments);
      form.append("first_payment_value" , obj.first_payment_value);
      form.append("last_payment_value" , obj.last_payment_value);
      form.append("bank_id" , obj.bank_id);
      form.append("city_id" , obj.city_id);
      form.append("work" , obj.work);
      form.append("driving_license" , obj.driving_license);
      form.append("stumbles" , obj.stumbles);
      const result = await $axios.post(`individuals-finance`, form);
      if (result.status >= 200) {
        getToast('sendOtp');
        isLoading.value = false;
        errors.value = undefined;
        checkOtp.value = 2;
        otp1.value = result.data?.otp;
       
        resetForm({
          values: {
            city_id: "",
            name: "",
            car_id: "",
            phone: "",
            salary: "",
            commitments: "",
            first_payment_value: "",
            last_payment_value: "",
            bank_id: "",
            work: "",
            city_id: "",
            driving_license: "",
            stumbles: "",
            price:""
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
      form.append("name" , obj.name);
      form.append("phone" , `+966${obj.phone}`);
      form.append("car_id" , obj.car_id);
      form.append("price" , obj.price);
      const result = await $axios.post(`individuals-cash`, form);
      if (result.status >= 200) {
        getToast('sendOtp');
        otp1.value = result.data?.otp;
        checkOtp.value = 2;
        isLoading2.value = false;
        errors2.value = undefined;
        resetForm({
          values: {
            price: "",
            name: "",
            car_id: "",
            phone: "",
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
    changeStat2,
    isLoading2,
    reSendOtp,
    getContact,
    checkOtp,
    paymentOtp,
    pendingOtp1,
    phone1,
    orderInd1,
    otp1,
    sendOtp,
    getContact2
  };
});