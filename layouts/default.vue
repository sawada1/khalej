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

});

watch(
  [() => locale.value],
  ([val]) => {
    console.log('dsdsd');
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