<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
      <!-- <RouterView /> -->
  </div>
</template>


<style lang="scss">
 html[dir="rtl"]{
  input[type="tel"]{
  direction: rtl;
}
 }
 html[dir="ltr"]{
  input[type="tel"]{
  direction: ltr;
}
 }
</style>
