<template>
  <div style="min-height: 100vh">
    <div v-if="mainItem" class="container single-new-container">
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
          <span>{{ $t("news") }}</span>
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
          <span class="fw-bold"> {{ $t("new") }} </span>
        </div>
        <div>
          <h1 class="title mobileHead"> {{ mainItem.news.title }} </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="3"
            viewBox="0 0 50 3"
            fill="none"
          >
            <rect
              x="11.9048"
              width="78.0952"
              height="3.00022"
              rx="1.50011"
              fill="#2D9596"
            />
            <rect
              opacity="0.9"
              width="5.14286"
              height="3.00022"
              rx="1.50011"
              fill="#2D9596"
            />
          </svg>
        </div>
      </div>
      <div class="single-new">
        <div
          class="row justify-content-center justify-content-xl-between justify-content-lg-between"
        >
          <div class="col-12 col-xl-7 col-lg-7">
            <div class="img-box">
              <div class="image">
                <!-- <img src="~/assets/imgs/news1.png" alt="car" /> -->
                <img :src="mainItem.news.main_image" alt="car" />
                <div class="overlay"></div>
              </div>
              <div class="text">
               {{ mainItem.news.description }}
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-4 col-lg-4">
            <div class="news-related">
              <div class="news-box">
                <h5>{{ $t("newss1") }}</h5>
                <div class="boxes">
                  <div v-for="item in mainItem.latestNews" class="box my-2">
                    <div class="image">
                      <!-- <img src="~/assets/imgs/news1.png" alt="car" /> -->
                      <img :src="item.highlighted_image" alt="car" />
                    </div>
                    <div class="text w-100">
                      <h6> {{ item.title }} </h6>
                      <div
                        class="d-flex w-100 align-items-center justify-content-between"
                      >
                        <div class="date">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <g clip-path="url(#clip0_148_13397)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M-0.000976562 7.99985C-0.000976562 12.411 3.5879 15.9999 7.99902 15.9999C12.4101 15.9999 15.9991 12.411 15.9991 7.99985C15.9991 3.58872 12.4102 -0.000183105 7.99905 -0.000183105C3.58793 -0.000183105 -0.000976562 3.58872 -0.000976562 7.99985ZM10.1558 10.9652L7.59468 8.40391C7.48852 8.29675 7.42787 8.1515 7.42787 7.99988V2.8246C7.42787 2.509 7.68399 2.25322 7.99905 2.25322C8.31415 2.25322 8.57024 2.509 8.57024 2.8246V7.76329L10.9645 10.1571C11.1869 10.3803 11.1869 10.7421 10.9645 10.9652C10.8533 11.077 10.7067 11.1328 10.5601 11.1328C10.4136 11.1328 10.2686 11.077 10.1558 10.9652Z"
                                fill="#90A3BF"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_148_13397">
                                <rect
                                  x="-0.000976562"
                                  width="16"
                                  height="16"
                                  rx="8"
                                  fill="white"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                          <span> {{ item.created_at }} </span>
                        </div>
                        <!-- <div @click="id = item.id , getNewsData()" class="icon">
                                                    <i class="fa-solid fa-arrow-left arrow-icon"></i>
                                                </div> -->
                        <div class="icon" @click="itemId = item.id , store.getNew(itemId)">
                          <i class="fa-solid fa-arrow-left arrowDir"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="news-box">
                <h5>{{ $t("newss2") }}</h5>
                <div class="icons">
                  <button @click="copyToClipboard()" class="iconn">
                    <img v-if="check" src="~/assets/imgs/share1.svg" alt="copy" />
                    <svg
                      v-else
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#90a3bf"
                      height="20"
                      width="20"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      />
                    </svg>
                  </button>
                  <a
                    :href="`https://www.instagram.com/?url=${routee}`"
                    target="_blank"
                    class="iconn"
                  >
                    <img src="~/assets/imgs/share2.svg" alt="instagram" />
                  </a>
                  <a
                    :href="`https://www.facebook.com/sharer/sharer.php?${routee}`"
                    target="_blank"
                    class="iconn"
                  >
                    <img src="~/assets/imgs/share3.svg" alt="facebook" />
                  </a>
                  <a
                    :href="`https://www.snapchat.com/share?url=${routee}`"
                    target="_blank"
                    class="iconn"
                  >
                    <img src="~/assets/imgs/share4.svg" alt="snapchat" />
                  </a>
                  <a
                    :href="`https://twitter.com/intent/tweet?url=${routee}`"
                    target="_blank"
                    class="iconn"
                  >
                    <img src="~/assets/imgs/share5.svg" alt="X" />
                  </a>
                  <a
                    :href="`https://wa.me/?text=${routee}/`"
                    target="_blank"
                    class="iconn"
                  >
                    <img src="~/assets/imgs/share6.svg" alt="whatsup" />
                  </a>
                </div>
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
import * as clipboard from "clipboard-polyfill";
import axios from "axios";
import { useNewStore } from "@/stores/news";
const localePath = useLocalePath();
const { locale } = useI18n();
const route = useRoute();
const itemId = ref(route.params.id);
const router = useRouter();
let store = useNewStore();
let mainItem = ref(store.newItem);
let isLoading = ref(store.isLoading2);
store.getNew(itemId.value);
let pending = ref(false);

let routee = ref(route.fullPath);
if (process.client) {
  routee.value = window.location.href;
}
let check = ref(true);

function copyToClipboard() {
  /* Copy the text */
  if (process.client) {
    check.value = false;
    routee.value = window.location.href;
    // const clipBoard = navigator.clipboard;
    clipboard.writeText(routee.value);

    // clipBoard.writeText(routee.value).then(() => {
    // });

    // console.log(window.location.href);
    setTimeout(() => {
      check.value = true;
    }, 1000);
  }
}


useSeoMeta({
  title: locale.value == 'ar' ? ' الاخبار ' : " news ",
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
});

watch([()=> store.newItem , store.isLoading2] , ([val1 , val2])=>{
  mainItem.value = val1;
  isLoading.value = val2;
})
</script>
