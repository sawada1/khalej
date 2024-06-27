<template>
    <div>
        <div class="allBrands row">
         <div v-for="i in 24" class="col-6 col-xl-2 col-lg-3 col-md-4">
            <nuxt-link to="/cars">

                <div class="box">
                 <img src="~/assets/imgs/brand1.svg" alt="">
                 <h4> تويوتا </h4>
                 <div class="d-flex align-items-center justify-content-between w-100">
                 <span> 320 سيارة </span>
                 <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7 6.29999H6.30004L6.30004 16.7H7.70004L7.70004 8.68994L17 17.9899L17.99 17L8.68999 7.69999H16.7V6.29999Z" fill="white"/>
                      </svg>
                 </div>
                </div>

            </nuxt-link>
         </div>
        </div>
    </div>
</template>

<script setup>

</script>