<template>
    <div>
        <div class=" empty-container">
      <div class="empty">
        <client-only>
          <Vue3Lottie :animation-data="cart" :height="200" :width="200" />
        </client-only>
        <h4> {{ $t("emptyfav1") }} </h4>
        <p>
          {{ $t("emptyfav2") }}
        </p>

        <nuxt-link :to="localePath('/market')">
          <button> {{ $t("emptyfav3") }} </button>

        </nuxt-link>

      </div>
    </div>
    </div>
</template>

<script setup> 
import { Vue3Lottie } from "vue3-lottie";
import cart from "~/assets/animations/fav.json";
const localePath = useLocalePath();

</script>