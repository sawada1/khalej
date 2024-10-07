
import axios from 'axios';

export default defineNuxtPlugin((nuxtApp) => {
    const i18n = nuxtApp.$i18n; // Access the i18n instance directly
    const locale = i18n.locale.value;
  // Create an Axios instance with default configuration
  const axiosInstance = axios.create({
    baseURL: 'https://new.khalejauto.sa/api', // Your base URL
    // headers: {
    //     'Content-Language': locale.value == 'en' ? 'en' : 'ar', // Default content language
    //     // 'Content-Type': 'application/json', // Default content type
    //   }
  });

  // Add a request interceptor to update the headers before each request
  axiosInstance.interceptors.request.use((config) => {
    // Update the Content-Language header with the current locale
    config.headers['Content-Language'] = i18n.locale.value === 'en' ? 'en' : 'ar';
    return config;
  });

  // Make the Axios instance available globally
  nuxtApp.provide('axios', axiosInstance);
});