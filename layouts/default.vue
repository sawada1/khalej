<template>
    <div>
        <navBar />
        <NetworkConnction v-if="checkInt" />
       <loading v-if="isLoading"/>
        <slot></slot>
       </div>
        <mainFooter />
</template>



<script setup>
import { useContactStore } from "@/stores/contact";
import { useHomeStore } from "@/stores/home";
import { useCareerStore } from "@/stores/career";
let store3 = useCareerStore();
let store = useContactStore();
 let store2 = useHomeStore();
const isLoading = ref(true);
const checkInt = ref(false);
const { locale, setLocale } = useI18n();

const handleOffline = () => {
  checkInt.value = true;
};
const handleOnline = () => {
  checkInt.value = false;
};


onMounted(() => {
    isLoading.value = false;
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    useHead({
      htmlAttrs: {
        lang: locale.value == 'en' ? "en" : "ar",
        dir: locale.value == "en" ? "ltr" : "rtl",
      },
    });

});

onBeforeMount(() => {
  useHead({
      htmlAttrs: {
        lang: locale.value == 'en' ? "en" : "ar",
        dir: locale.value == "en" ? "ltr" : "rtl",
      },
    });
});

watch(
  [() => locale.value],
  ([val]) => {
    store.questions = [];
    store.page = 1;
    store3.careers = [];
    store3.page = 1;
    useHead({
      htmlAttrs: {
        lang: val == 'en' ? "en" : "ar",
        dir: val == "en" ? "ltr" : "rtl",
      },
    });
  }
);
onUnmounted(() => {
  window.removeEventListener('online', handleOnline);
  window.removeEventListener('offline', handleOffline);
  
});
</script>


<style>

</style>