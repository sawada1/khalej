<template>
  <div style="min-height: 100vh">
    <div class="hero-section" style="width: 100%; height: 100vh">
      <div class="overlay"></div>
      <img
        class="w-100 h-100"
        style="object-fit: cover"
        src="~/assets/imgs/hero.png"
        alt="hero"
      />
    </div>
    <div class="container search-home-p">
      <div class="search-home row">
      
        <div class="inp col-12 col-lg-3">
          <label for=""> {{ $t("brand") }} </label>
          <div
            v-if="dropdown1"
            :id="dropdown1.id"
            class="dropdown-container search"
            @click="dropdown1.toggle()"
          >
            <button class="dropdown-toggle-container">
              {{
                dropdown1.selected.name
                  ? dropdown1.selected.name
                  : dropdown1.selected
              }}
              <img src="~/assets/imgs/Small2.svg" alt="arrow" />
            </button>
            <div v-if="dropdown1.isOpen" class="dropdown-menu" @click.stop>
              <!-- @click.prevent="dropdown1.select(item.title)" -->
              <div
                v-if="dropdown1.items"
                class="dropdown-item"
                v-for="item in dropdown1.items"
                @click.prevent="
                  dropdown1.select2(item),
                    store.getCarsByBrand(item.id),
                    (selectedBrand = item.id)
                "
                :key="item.id"
                :for="`checkBox-${item.id}`"
              >
                <span>
                  {{ item.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="inp col-12 col-lg-3">
          <label for=""> {{ $t("model") }} </label>
          <div
            v-if="dropdown2"
            :id="dropdown2.id"
            class="dropdown-container search"
            @click="dropdown2.toggle()"
          >
            <button class="dropdown-toggle-container">
              {{
                dropdown2.selected.name
                  ? dropdown2.selected.name
                  : dropdown2.selected
              }}
              <img src="~/assets/imgs/Small2.svg" alt="arrow" />
            </button>
            <div v-if="dropdown2.isOpen" class="dropdown-menu" @click.stop>
              <!-- @click.prevent="dropdown1.select(item.title)" -->
              <div
                class="dropdown-item"
                v-for="item in dropdown2.items"
                @click.prevent="
                  dropdown2.select2(item), (selectedmodel = item.id)
                "
                :key="item.id"
                :for="`checkBox-${item.id}`"
              >
                <span>
                  {{ item.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="inp col-12 col-lg-3">
          <label for=""> {{ $t("name") }} </label>
          <div
            v-if="dropdown3"
            :id="dropdown3.id"
            class="dropdown-container search"
            @click="dropdown3.toggle()"
          >
            <button class="dropdown-toggle-container">
              {{
                dropdown3.selected.name
                  ? dropdown3.selected.name
                  : dropdown3.selected
              }}
              <img src="~/assets/imgs/Small2.svg" alt="arrow" />
            </button>
            <div v-if="dropdown3.isOpen" class="dropdown-menu" @click.stop>
              <!-- @click.prevent="dropdown1.select(item.title)" -->
              <div
                class="dropdown-item"
                v-for="item in dropdown3.items"
                @click.prevent="
                  dropdown3.select2(item), (selectedCar = item.id)
                "
                :key="item.id"
                :for="`checkBox-${item.id}`"
              >
                <span>
                  {{ item.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <nuxt-link
          class="searchBtn mt-2"
          :to="
            localePath({
              path: '/cars',
              query: {
                car_id: selectedCar,
                id: selectedBrand,
                model: selectedmodel,
              },
            })
          "
        >
          {{ $t("search") }}
        </nuxt-link>
      </div>
    </div>
    <div class="container explore-brands-section mb-5">
      <div class="text d-flex flex-column align-items-center text-center">
        <h1 class="mobileHead">
          <span> {{ $t("explore2") }} </span> {{ $t("explore1") }}
        </h1>
        <p>
          {{ $t("explore3") }}
        </p>
      </div>

      <brands :brandsArr="brandsArr" />
    </div>
    <div class="container why-choose-section">
      <div class="text d-flex flex-column align-items-center text-center">
        <h2 class="mobileHead">
          {{ $t("why") }} <span> {{ $t("choose") }} </span>
          <img src="~/assets/imgs/whyIcon.svg" alt="" />
        </h2>
        <p>
          {{ $t("choosetitle") }}
        </p>
      </div>
      <div class="row">
        <div
          v-for="item in store.chooseArr"
          :key="item.id"
          class="col-12 col-xl-3 col-lg-4 col-md-6"
        >
          <div class="box mb-5 mb-xl-0">
            <img :src="item.icon" alt="prucher icon" />
            <h5>{{ item.title }}</h5>
            <p>
              {{ item.description }}
              <!-- <span class="readMore" v-if="$t('chooseP1').length >= 140">
               read more...
              </span> -->
            </p>
          </div>
        </div>
        <!-- <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="box mb-5 mb-xl-0">
            <img src="~/assets/imgs/icon2.svg" alt="best price icon" />
            <h5> {{ $t('choose2') }} </h5>
            <p>
              {{ $t('chooseP2') }}
              
            </p>
          </div>
        </div>
        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="box mb-5 mb-xl-0">
            <img src="~/assets/imgs/icon3.svg" alt="customer service icon" />
            <h5> {{ $t('choose3') }}</h5>
            <p>
              {{ $t('chooseP3') }}
            </p>
          </div>
        </div>
        <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="box">
            <img src="~/assets/imgs/icon4.svg" alt="credit icon" />
            <h5> {{ $t('choose4') }} </h5>
            <p>
              {{ $t('chooseP4') }}
            </p>
          </div>
        </div> -->
      </div>
    </div>

    <div class="cars-section-home">
      <div class="container">
        <div class="text">
          <h2 class="mobileHead">{{ $t("cars") }}</h2>
          <p>{{ $t("car1") }}</p>
        </div>
        <div v-if="store.cars" class="row">
          <div
            v-for="(item, index) in store.carsHome.slice(0, 4)"
            :key="item"
            class="col-12 col-xl-3 col-lg-4 col-md-6 mb-5"
          >
            <car-card :item="item"></car-card>
          </div>
        </div>

        <!-- <Swiper
        
    :modules="[SwiperAutoplay]"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
    :breakpoints="{
      '640': {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      '768': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    }"
  >
    <SwiperSlide v-for="(item, index) in store.cars" :key="item">
      ss<car-card :item="item"></car-card>
    </SwiperSlide>
  </Swiper> -->

        <div class="d-flex align-items-center justify-content-center">
          <nuxt-link :to="localePath('/cars')">
            <button class="more-btn">{{ $t("more") }}</button>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="payment-order-section">
        <div class="custom-row row position-relative">
          <div
            class="col-12 col-xl-6 col-lg-6 d-flex align-items-cente justify-content-cen mb-5 mb-xl-0 mb-lg-0"
          >
            <div class="main-one d-flex flex-column">
              <div class="text-contaier">
                <h2 class="mobileHead">{{ $t("orderHome") }}</h2>
                <p>
                  {{ $t("orderHome2") }}
                </p>
              </div>
              <div class="image-container">
                <div class="text">
                  <h3>{{ $t("indi") }}</h3>
                  <nuxt-link :to="localePath('/order-individuals')">
                    <button class="paymentBTN">
                      {{ $t("orderHome") }}
                      <svg
                        class="arrowDir"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.5247 4.72498H4.72473L4.72472 12.525H5.77472L5.77473 6.51744L12.7497 13.4924L13.4922 12.75L6.51719 5.77498H12.5247V4.72498Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </nuxt-link>
                  <img src="~/assets/imgs/order2.png" alt="car" />
                </div>
              </div>
            </div>
          </div>
          <div
            class="col-12 position-relative col-xl-6 col-lg-6 d-flex align-items-cente justify-content-"
          >
            <div class="position-sticky image-container">
              <div class="text">
                <h3>{{ $t("comp") }}</h3>
                <nuxt-link :to="localePath('/order-company')">
                  <button>
                    {{ $t("orderHome") }}
                    <svg
                      class="arrowDir"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.5247 4.72498H4.72473L4.72472 12.525H5.77472L5.77473 6.51744L12.7497 13.4924L13.4922 12.75L6.51719 5.77498H12.5247V4.72498Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </nuxt-link>
                <img src="~/assets/imgs/order1.png" alt="order" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="how-work-section">
        <div class="row">
          <div class="col-12 col-xl-4 col-lg-16">
            <div class="text-container">
              <span> {{ $t("how1") }} </span>
              <h2 class="mobileHead">{{ $t("how2") }}</h2>
              <p>
                {{ $t('headStep') }}
              </p>
              <nuxt-link :to="localePath('/contact')">
                <button>{{ $t("contactUs") }}</button>
              </nuxt-link>
            </div>
          </div>
          <div class="col-12 col-xl-8 col-lg-12">
            <div class="row cards">
              <div
                v-for="(item, index) in howArr" 
                :key="item"
                class="col-12 col-xl-6 col-lg-6"
              >
                <div
                  class="main-card d-flex align-items-center justify-content-center"
                >
                  <div class="num">
                    <svg
                      class="default"
                      xmlns="http://www.w3.org/2000/svg"
                      width="105"
                      height="105"
                      viewBox="0 0 105 105"
                      fill="none"
                    >
                      <circle
                        opacity="0.15"
                        cx="52.5"
                        cy="52.5"
                        r="52.5"
                        fill="#A7B9D0"
                      />
                    </svg>
                    <svg
                      class="active"
                      xmlns="http://www.w3.org/2000/svg"
                      width="105"
                      height="105"
                      viewBox="0 0 105 105"
                      fill="none"
                    >
                      <circle cx="52.5" cy="52.5" r="52.5" fill="white" />
                    </svg>
                    <span> {{ `0${index + 1}.` }} </span>
                  </div>
                  <div class="text-card d-flex flex-column">
                    <h5>{{ item.title }}</h5>
                    <p> {{ item.desc }} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
const { t ,  locale, setLocale } = useI18n();
import { useHomeStore } from "@/stores/home";
let store = useHomeStore();
store.getBrands();
 store.getCars();
//  store.getModels();
store.getChoose();
let cars = ref(store.cars);
let brandsArr = ref(store.brands);
let modelsArr = ref(store.models);
let selectedBrand = ref();
let selectedmodel = ref();
let selectedCar = ref();
const howArr = ref([
      {
        title: t('steps.search.title'),
        desc: t('steps.search.desc'),
      },
      {
        title: t('steps.choose.title'),
        desc: t('steps.choose.desc'),
      },
      {
        title: t('steps.order.title'),
        desc: t('steps.order.desc'),
      },
      {
        title: t('steps.contact.title'),
        desc: t('steps.contact.desc'),
      },
    ]);
let dropdownVal1 = ref(
  locale.value == "ar" ? "اختر ماركة السيارة " : "choose car brand"
);
let dropdownVal2 = ref(
  locale.value == "ar" ? "اختر موديل السيارة " : "choose car model"
);
let dropdownVal3 = ref(
  locale.value == "ar" ? "اختر اسم السيارة " : "choose car name"
);
const dropdown1 = ref(process.client ? new Dropdown(dropdownVal1.value) : null);
const dropdown2 = ref(process.client ? new Dropdown(dropdownVal2.value) : null);
const dropdown3 = ref(process.client ? new Dropdown(dropdownVal3.value) : null);

const modelss = computed(() => {
  return store.models;
});

watch(
  [() => store.cars, () => store.brands, () => store.models],
  ([val1, val2, val3]) => {
    // obj.value.val1 = val1.id;
    // obj.value.val2 = val2.id;
    // obj.value.val3 = val3.id;
    cars.value = val1;
    console.log(val3);
    brandsArr.value = val2;
    modelsArr.value = val3;
    dropdown1.value.items = val2;
    dropdown2.value.items = val3;
    dropdown3.value.items = val1;
    console.log(val1);
  }
);

const handleClickOutside = (event) => {
  if (dropdown1.value) {
    dropdown1.value.handleClickOutside(event);
    dropdown2.value.handleClickOutside(event);
    dropdown3.value.handleClickOutside(event);
  }
};

useSeoMeta({
  title: locale.value == "ar" ? "الرئيسية" : " home ",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
});

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
  dropdown1.value.items = brandsArr.value;
  dropdown2.value.items = modelsArr.value;
  dropdown3.value.items = cars.value;
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style></style>
