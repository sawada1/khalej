<template>
    <div style="min-height: 100vh;">
     <div class=" container offers-page">
        <div class="text-page">
                <div class="breadline">
                    <span> {{ $t('home') }} </span>
                    <svg class="arrowDir" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M9.99998 13.28L5.65331 8.9333C5.13998 8.41997 5.13998 7.57997 5.65331 7.06664L9.99998 2.71997" stroke="#A7B9D0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    <span> {{ $t('offers') }} </span>
                </div>
                <div>
                    <h1 class="title">
                        {{ $t('offers') }}
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="3" viewBox="0 0 50 3" fill="none">
  <rect x="11.9048" width="38.0952" height="3.00022" rx="1.50011" fill="#2D9596"/>
  <rect opacity="0.9" width="7.14286" height="3.00022" rx="1.50011" fill="#2D9596"/>
</svg>
                </div>
            </div>

            <div class="offers-boxes">
                <div class="row">
                    <div v-for="item, index in offers" class="col-12 col-xl-4 col-lg-6 mb-5">
                        <div :to="`/news/${index + 1}`" class="box">
                            <div class="image">
                                <!-- ~/assets/imgs/offer.jpeg -->
                                <img :src="item.image" alt="car">
                            </div>
                            <div class="text">
                                <h4> {{ item.title_ar }} </h4>
                                <p> {{ item.description_ar }} </p>
                                <nuxt-link :to="localePath(`/offers/${item.id}`)" >
                                    <button> {{ $t('offerBtn') }} </button>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

     </div>
    <loading v-if="isLoading"/>
    </div>
</template>

<script setup>
import { useOfferStore } from "@/stores/offers";
const localePath = useLocalePath();
let store = useOfferStore();
let isLoading = ref(store.isLoading);
store.getOffers();
let offers = ref([]);
let { locale } = useI18n();

useSeoMeta({
  title: locale.value == 'ar' ? ' العروض ' : " offers ",
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
});
watch([()=> store.offers , store.isLoading] , ([val1 , val2])=>{
    offers.value = val1;
  isLoading.value = val2;
})
</script>