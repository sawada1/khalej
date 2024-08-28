<template>
  <div style="min-height: 100vh">
    <div class="container news-page">
    
      <div class="text-page">
        <div class="breadline">
          <span>{{ $t("home") }}</span>
          <svg
          class="arrowDir"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M9.99998 13.28L5.65331 8.9333C5.13998 8.41997 5.13998 7.57997 5.65331 7.06664L9.99998 2.71997"
              stroke="#A7B9D0"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span> {{ $t("news") }} </span>
        </div>
        <div>
          <h1 class="title">
            {{ $t("news") }}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="3"
            viewBox="0 0 50 3"
            fill="none"
          >
            <rect
              x="11.9048"
              width="38.0952"
              height="3.00022"
              rx="1.50011"
              fill="#2D9596"
            />
            <rect
              opacity="0.9"
              width="7.14286"
              height="3.00022"
              rx="1.50011"
              fill="#2D9596"
            />
          </svg>
        </div>
      </div>

      <div class="news-boxes">
        <div class="row">
          <div
            v-for="(item, index) in newss"
            class="col-12 col-xl-4 col-lg-6 mb-5"
          >
            <nuxt-link :to="localePath(`/news/${item.id}`)" class="box">
              <div class="image">
                <!-- ~/assets/imgs/news1.png -->
                <img :src="item.main_image" alt="car" />
              </div>
              <h4> {{ item.title }}  </h4>
              <p>
              {{ item.description }}
               </p>
              <div class="d-flex align-items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_2311)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.00108719 8.99979C0.00108719 13.9623 4.03857 17.9998 9.00109 17.9998C13.9636 17.9998 18.0012 13.9623 18.0012 8.99979C18.0012 4.03728 13.9636 -0.000244141 9.00112 -0.000244141C4.03861 -0.000244141 0.00108719 4.03728 0.00108719 8.99979ZM11.4274 12.3358L8.5462 9.45436C8.42677 9.33381 8.35854 9.1704 8.35854 8.99983V3.17763C8.35854 2.82259 8.64668 2.53484 9.00112 2.53484C9.3556 2.53484 9.64371 2.82259 9.64371 3.17763V8.73366L12.3373 11.4267C12.5875 11.6779 12.5875 12.0848 12.3373 12.3358C12.2122 12.4616 12.0473 12.5244 11.8824 12.5244C11.7174 12.5243 11.5544 12.4616 11.4274 12.3358Z"
                      fill="#2D9596"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2311">
                      <rect
                        x="0.00128174"
                        width="18"
                        height="18"
                        rx="9"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span> {{ item.created_at }} </span>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <loading v-if="isLoading"/>

  </div>
</template>

<script setup>
import { useNewStore } from "@/stores/news";
const localePath = useLocalePath();
let store = useNewStore();
let isLoading = ref(store.isLoading);
store.getNews();
let newss = ref([]);
let { locale } = useI18n();

useSeoMeta({
  title: locale.value == 'ar' ? ' الاخبار ' : " news ",
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
});
watch([()=> store.news , store.isLoading] , ([val1 , val2])=>{
  newss.value = val1;
  isLoading.value = val2;
})
onMounted(() => {
});
</script>
