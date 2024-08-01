<template>
    <div>
        <navBar />
       <loading v-if="isLoading"/>
        <slot></slot>
       </div>
   
        <mainFooter />
</template>



<script setup>

import { ref, onMounted  } from 'vue';



const isLoading = ref(true);


onMounted(() => {
 
    isLoading.value = false;

});
</script>


<style>

</style>