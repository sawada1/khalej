<template>
  <div style="min-height: 100vh">
    <div class="all-cars-container">
      <div class="text-page">
        <div
          class="d-flex align-items-center flex-column w-100 justify-content-center"
        >
          <div class="breadline">
            <span> {{ $t("home") }} </span>
            <svg
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
            <span> {{ $t("market") }} </span>
          </div>
          <div>
            <h1 class="title">{{ $t("market") }}</h1>
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
        <div class="container filter-container flex-column flex-xl-row">
          <button @click="showFilter = !showFilter" class="filter-btn" :class="{'active': showFilter}">
            <svg
              v-if="!showFilter"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.33355 9.1314C9.33355 8.99978 9.37251 8.87111 9.44552 8.7616L12.8179 3.70305C13.1132 3.26002 12.7956 2.66659 12.2632 2.66659H3.73725C3.20478 2.66659 2.88719 3.26002 3.18255 3.70305L6.55492 8.7616C6.62792 8.87111 6.66688 8.99978 6.66688 9.1314V13.0581C6.66688 13.5817 7.24285 13.9009 7.68688 13.6234L9.02022 12.7901C9.21514 12.6683 9.33355 12.4546 9.33355 12.2248V9.1314ZM10.6669 9.5351C10.6669 9.40349 10.7058 9.27481 10.7788 9.1653L13.9273 4.44265C14.8134 3.11354 13.8606 1.33325 12.2632 1.33325H3.73725C2.13986 1.33325 1.18708 3.11354 2.07315 4.44265L5.22158 9.1653C5.29459 9.27481 5.33355 9.40349 5.33355 9.5351V13.0581C5.33355 14.629 7.06145 15.5866 8.39355 14.7541L9.72688 13.9208C10.3116 13.5553 10.6669 12.9143 10.6669 12.2248V9.5351Z"
                fill="#363F4D"
              />
            </svg>
            <svg
              v-if="showFilter"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L8 6.58579L13.2929 1.29289C13.6834 0.902369 14.3166 0.902369 14.7071 1.29289C15.0976 1.68342 15.0976 2.31658 14.7071 2.70711L9.41421 8L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L8 9.41421L2.70711 14.7071C2.31658 15.0976 1.68342 15.0976 1.29289 14.7071C0.902369 14.3166 0.902369 13.6834 1.29289 13.2929L6.58579 8L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z"
                fill="#363F4D"
              />
            </svg>
            <span>
            {{ $t("filter") }} 
            </span>
          </button>
          <div
            v-if="showFilter"
            class="d-flex align-items-center flex-column flex-xl-row main-filter"
          >
            <div class="inp">
              <label for=""> {{ $t("brand") }} </label>
              <div
                v-if="dropdown1"
                :id="dropdown1.id"
                class="dropdown-container cars"
                @click="dropdown1.toggle()"
              >
                <button class="dropdown-toggle-container">
                  <span class="text-drop">
                    {{
                      dropdown1.selected.name
                        ? dropdown1.selected.name
                        : dropdown1.selected
                    }}
                  </span>
                  <img
                    class="icon"
                    :class="{ active: dropdown1.isOpen }"
                    src="~/assets/imgs/Small.svg"
                    alt="arrow"
                  />
                </button>
                <div v-if="dropdown1.isOpen" class="dropdown-menu" @click.stop>
                  <label
                    class="dropdown-item"
                    @click="dropdown1.select(item)"
                    v-for="(item, index) in dropdown1.items"
                    :key="item.id"
                    :for="`checkBox-${item.id}`"
                  >
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21 16.25H15C14.59 16.25 14.25 15.91 14.25 15.5C14.25 15.09 14.59 14.75 15 14.75H21C21.41 14.75 21.75 15.09 21.75 15.5C21.75 15.91 21.41 16.25 21 16.25Z"
                            fill="#A7B9D0"
                          />
                          <path
                            d="M21 20.25H15C14.59 20.25 14.25 19.91 14.25 19.5C14.25 19.09 14.59 18.75 15 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z"
                            fill="#A7B9D0"
                          />
                          <path
                            d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                            fill="#A7B9D0"
                          />
                          <path
                            d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                            fill="#A7B9D0"
                          />
                          <path
                            d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                            fill="#A7B9D0"
                          />
                        </svg>
                        <span>
                          {{ item.name }}
                        </span>
                      </div>
                      <input
                        :id="`checkBox-${item.id}`"
                        type="checkbox"
                        v-model="arr"
                        :value="item.id"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="inp">
              <label for=""> {{ $t("models") }} </label>
              <div
                v-if="dropdown2"
                :id="dropdown2.id"
                class="dropdown-container cars"
                @click="dropdown2.toggle()"
              >
                <button class="dropdown-toggle-container">
                  <span class="text-drop">
                    {{
                      dropdown2.selected.name
                        ? dropdown2.selected.name
                        : dropdown2.selected
                    }}
                  </span>
                  <img
                    class="icon"
                    :class="{ active: dropdown2.isOpen }"
                    src="~/assets/imgs/Small.svg"
                    alt="arrow"
                  />
                </button>
                <div v-if="dropdown2.isOpen" class="dropdown-menu" @click.stop>
                  <label
                    class="dropdown-item"
                    @click="dropdown2.select(item)"
                    v-for="(item, index) in dropdown2.items"
                    :key="item.id"
                    :for="`checkBox-${item.id}`"
                  >
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21 16.25H15C14.59 16.25 14.25 15.91 14.25 15.5C14.25 15.09 14.59 14.75 15 14.75H21C21.41 14.75 21.75 15.09 21.75 15.5C21.75 15.91 21.41 16.25 21 16.25Z"
                            fill="#A7B9D0"
                          />
                          <path
                            d="M21 20.25H15C14.59 20.25 14.25 19.91 14.25 19.5C14.25 19.09 14.59 18.75 15 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z"
                            fill="#A7B9D0"
                          />
                          <path
                            d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                            fill="#A7B9D0"
                          />
                          <path
                            d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                            fill="#A7B9D0"
                          />
                          <path
                            d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                            fill="#A7B9D0"
                          />
                        </svg>
                        <span>
                          {{ item.name }}
                        </span>
                      </div>
                      <input
                        :id="`checkBox-${item.id}`"
                        type="checkbox"
                        v-model="arr2"
                        :value="item.id"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="inp">
              <label for=""> {{ $t("pattern") }} </label>
              <div
                v-if="dropdown3"
                :id="dropdown3.id"
                class="dropdown-container cars"
                @click="dropdown3.toggle()"
              >
                <button class="dropdown-toggle-container">
                  <span class="text-drop">
                    {{
                      dropdown3.selected.name
                        ? dropdown3.selected.name
                        : dropdown3.selected
                    }}
                  </span>
                  <img
                    class="icon"
                    :class="{ active: dropdown3.isOpen }"
                    src="~/assets/imgs/Small.svg"
                    alt="arrow"
                  />
                </button>
                <div v-if="dropdown3.isOpen" class="dropdown-menu" @click.stop>
                  <label
                    class="dropdown-item"
                    @click="dropdown3.select(item)"
                    v-for="(item, index) in dropdown3.items"
                    :key="item.id"
                    :for="`checkBox-${item.id}`"
                  >
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div class="d-flex align-items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21 16.25H15C14.59 16.25 14.25 15.91 14.25 15.5C14.25 15.09 14.59 14.75 15 14.75H21C21.41 14.75 21.75 15.09 21.75 15.5C21.75 15.91 21.41 16.25 21 16.25Z"
                            fill="#A7B9D0"
                          />
                          <path
                            d="M21 20.25H15C14.59 20.25 14.25 19.91 14.25 19.5C14.25 19.09 14.59 18.75 15 18.75H21C21.41 18.75 21.75 19.09 21.75 19.5C21.75 19.91 21.41 20.25 21 20.25Z"
                            fill="#A7B9D0"
                          />
                          <path
                            d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z"
                            fill="#A7B9D0"
                          />
                          <path
                            d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z"
                            fill="#A7B9D0"
                          />
                          <path
                            d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z"
                            fill="#A7B9D0"
                          />
                        </svg>
                        <span>
                          {{ item.name }}
                        </span>
                      </div>
                      <input
                        :id="`checkBox-${item.id}`"
                        type="checkbox"
                        v-model="arr3"
                        :value="item.id"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column w-100">
              <v-range-slider
                v-model="valuePrices"
                :max="store.prices?.maxPrice"
                :min="store.prices?.minPrice"
                color="#363F4D"
                strict
              ></v-range-slider>
              <div
                class="currency d-flex align-items-center justify-content-between"
              >
                <span> {{ Math.round(valuePrices[0]) }} {{ $t("curr") }} </span>
                <span> {{ Math.round(valuePrices[1]) }} {{ $t("curr") }}</span>
              </div>
            </div>
            <button @click="filter()" class="searchBtn2">{{ $t("search") }}</button>
          </div>
        </div>
      </div>
      
      <div class="allcars">
     

        <div v-if="pendingState" class="empty-state">
          <client-only>
            <Vue3Lottie :animation-data="search" :height="200" :width="200" />
          </client-only>
          <h4>{{ $t("not1") }}</h4>
          <p>{{ $t("not2") }}</p>
          <!-- <button></button> -->
        </div>
        <div class="container">
          <div class="row">
            <div
              v-for="item in store.filteredCar"
              class="col-12 col-xl-3 col-lg-3 col-md-6 mb-5"
            >
              <car-card :item="item"></car-card>
            </div>
          </div>
          <!-- :model-value="progressValue" -->
          <div class="d-flex progress-container flex-column gap-3">
            <v-progress-linear
              :reverse="reverse"
              rounded
              color="#2D9596"
              :model-value="progressValue"
              :height="6"
            >
            </v-progress-linear>
            <button class="addMoreBtn" @click="loadMore()">{{ $t("showmore") }}</button>
          </div>
        </div>
        <div v-if="isLoading3" class="d-flex align-items-center justify-content-center" style="min-height: 50vh;">
        <img class="animated-image" src="../assets/imgs/loader.svg" alt="">
      </div>
      </div>
    </div>
    <loading v-if="isLoading" />
  </div>
</template>

<script setup>
import { useCarStore } from "@/stores/car";
import { Vue3Lottie } from "vue3-lottie";
import search from "~/assets/animations/search.json";
import { useHomeStore } from "@/stores/home";
let store2 = useHomeStore();
store2.getBrands();
store2.getCars();
store2.getModels();
let store = useCarStore();
store.gePrices();
let route = useRoute();
let cars = ref(store2.cars);
let brandsArr = ref(store2.brands);
let modelsArr = ref(store2.models);
let pendingState = ref(false);
let filteredCar = ref(store.filteredCar);
let isLoading = ref(store.isLoading2);
let isLoading3 = ref(store.isLoading3);
let arr = ref(route.query.id ? [route.query.id] : []);
let arr2 = ref(route.query.model ? [route.query.model] : []);
let arr3 = ref(route.query.car_id ? [route.query.car_id] : []);
let valuePrices = ref([10000, 90000]);
let showFilter = ref(false);
let { locale } = useI18n();
const localePath = useLocalePath();

let reverse = ref(locale.value == "ar" ? true : false);
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
const handleClickOutside = (event) => {
  if (dropdown1.value) {
    dropdown1.value.handleClickOutside(event);
    dropdown2.value.handleClickOutside(event);
    dropdown3.value.handleClickOutside(event);
  }
};

const pageCount = computed(() => {
  return Math.ceil(store.total / store.per_page);
});

const progressValue = computed(() => {
  return ((store.per_page * 1) / store.total) * 100;
});
const loadMore = async () => {
  if (store.page < pageCount.value) {
    store.page++;
    await   store.getSearchCars({
    brand_id: arr.value,
    model_id: arr2.value,
    car_id: arr3.value,
    min_price: Math.round(valuePrices.value[0]),
    max_price: Math.round(valuePrices.value[1]),
  });
  }
};
const filter = () => {
  store.getSearchCars({
    brand_id: arr.value,
    model_id: arr2.value,
    car_id: arr3.value,
    min_price: Math.round(valuePrices.value[0]),
    max_price: Math.round(valuePrices.value[1]),
  });
};
watch(
  [
    () => store.filteredCar,
    () => store.isLoading2,
    () => store.pendingState,
    () => store2.cars,
    () => store2.brands,
    () => store2.models,
    () => store.isLoading3,
    () => store.prices,
  ],
  ([val1, val2, val3, val4, val5, val6 , val7  ,val8]) => {
    filteredCar.value = val1;
    isLoading.value = val2;
    isLoading3.value = val7;
    pendingState.value = filteredCar.value.length < 1 ? true : false;
    dropdown1.value.items = val5;
    dropdown2.value.items = val6;
    dropdown3.value.items = val4;
    // valuePrices.value = [Number(val8?.minPrice) , Number(val8?.maxPrice)]
  }
);
watch(
  [() => route.query.id, () => route.query.model, () => route.query.car_id],
  ([val7, val8, val9]) => {
    if (val7 || val8 || val9) {
      arr.value = val7 ? [val7] : [];
      arr2.value = val8 ? [val8] : [];
      arr3.value = val9 ? [val9] : [];
      store.getSearchCars({
        brand_id: val7,
        model_id: val8,
        car_id: val9,
      });
    }
  }
);
onMounted(() => {
  store.getSearchCars({
    brand_id: route.query.id,
    model_id: route.query.model,
    car_id: route.query.car_id,
  });
  document.addEventListener("click", handleClickOutside);
  dropdown1.value.items = brandsArr.value;
  dropdown2.value.items = modelsArr.value;
  dropdown3.value.items = cars.value;
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
