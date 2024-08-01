<template>
  <div style="min-height: 100vh">
    <div class="container offer-page">
      <div class="text-page">
        <div class="breadline">
          <span>{{ $t("home") }}</span>
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
          <span> {{ $t("offers") }} </span>
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
          <span class="fw-bold"> {{ $t("offer") }} </span>
        </div>
        <div>
          <h1 class="title">سيارة كيا K4 2025 الجديدة</h1>
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

      <div class="main-offer-img">
        <img src="~/assets/imgs/offer.jpeg" alt="car" />
        <div class="overlay"></div>
      </div>

      <div class="cars">
        <div class="head">
          <h5>{{ $t("carOffer") }}</h5>
        </div>
        <div class="row">
          <div v-for="item in 6" class="col-12 col-xl-3 col-lg-3 col-md-6 my-3">
            <carCard />
          </div>
        </div>
      </div>
    </div>

    <!-- <Loader v-if="pending"></Loader>  -->
  </div>
</template>

<script setup>
import * as clipboard from "clipboard-polyfill";
import axios from "axios";
const localePath = useLocalePath();
const { locale } = useI18n();
const route = useRoute();
const itemId = ref(route.params.id);

const router = useRouter();

// let cars = ref([]);

// let image = ref('');

// let pending = ref(false);
// let offerArr = ref([]);
// const getOfferData = async ()=>{
//     pending.value = true;
//   let result = await axios.get(`${getUrl()}/offer/show/${id}`, {
//     headers: {
//       "Content-Language": `${locale.value}`,
//     },
//   });

// if(result.status == 200){
//     pending.value = false;
//     offerArr.value = result.data.data.Offers;
//     cars.value = result.data.data.RelatedCars;
//     image.value = result.data.data.fullPathImage
// }

// }
</script>
