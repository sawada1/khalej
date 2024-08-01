<template>
    <div>
        <div class="allBrands  ">
         <div class="row"  >
            <div v-for="b in  sliced" :key="b" class="col-6 col-xl-2 col-lg-3 col-md-4">      
            <nuxt-link :to="localePath('/cars')"  >
                <div class="box  ">
                 <img :src="b.img" alt="brand">
                 <h4> {{ b.name }} </h4>
                 <div class="d-flex align-items-center justify-content-between w-100">
                 <span> {{b.carnumbrs}}{{ $t('car') }} </span>
                 <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7 6.29999H6.30004L6.30004 16.7H7.70004L7.70004 8.68994L17 17.9899L17.99 17L8.68999 7.69999H16.7V6.29999Z" fill="white"/>
                      </svg>
                 </div>
                </div>
            </nuxt-link>
         </div>
        </div>
        <div v-if="hidde" class="showmoreBTN d-flex justify-content-center mt-4 "  >
            <button @click="showmore()">showmore</button>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const localePath = useLocalePath();
const { locale, setLocale } = useI18n();
const sliced=ref(null)
const X =ref(6)
const hidde=ref(true)
const brands= [
    {img:'/_nuxt//public/brands/brand1.svg',name:'تويوتا',carnumbrs:320},
    {img:'/_nuxt//public/brands/brand2.svg',name:'Audi',carnumbrs:45},
    {img:'/_nuxt//public/brands/brand3.svg',name:'بي ام دبليو',carnumbrs:90},
    {img:'/_nuxt//public/brands/brand4.svg',name:'فورد',carnumbrs:100},
    {img:'/_nuxt//public/brands/brand5.svg',name:'لامبوجيني',carnumbrs:24},
    {img:'/_nuxt//public/brands/brand6.svg',name:'بنتلي',carnumbrs:88},
    // 
    {img:'/_nuxt//public/brands/brand3.svg',name:'بي ام دبليو',carnumbrs:90},
    {img:'/_nuxt//public/brands/brand5.svg',name:'لامبوجيني',carnumbrs:24},
    {img:'/_nuxt//public/brands/brand1.svg',name:'تويوتا',carnumbrs:320},
    {img:'/_nuxt//public/brands/brand2.svg',name:'Audi',carnumbrs:45},
    {img:'/_nuxt//public/brands/brand6.svg',name:'بنتلي',carnumbrs:88},
    {img:'/_nuxt//public/brands/brand4.svg',name:'فورد',carnumbrs:100},
    // 
    {img:'/_nuxt//public/brands/brand6.svg',name:'بنتلي',carnumbrs:88},
    {img:'/_nuxt//public/brands/brand4.svg',name:'فورد',carnumbrs:100},
    {img:'/_nuxt//public/brands/brand3.svg',name:'بي ام دبليو',carnumbrs:90},
    {img:'/_nuxt//public/brands/brand1.svg',name:'تويوتا',carnumbrs:320},
    {img:'/_nuxt//public/brands/brand2.svg',name:'Audi',carnumbrs:45},
    {img:'/_nuxt//public/brands/brand5.svg',name:'لامبوجيني',carnumbrs:24},

]

sliced.value=brands.slice(0,X.value)

function showmore(){
    sliced.value=brands.slice(0,X.value+=4)    
}
</script>