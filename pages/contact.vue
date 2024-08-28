<template>
  <div style="min-height: 100vh">
    <div class="container contact-page">
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
          <span> {{ $t("contactt") }} </span>
        </div>
        <div>
          <h1 class="title">{{ $t("contactt") }}</h1>
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
      <div class="row">
        <div class="col-12 col-xl-6 col-lg-6">
          <div class="form-contact">
            <div>
              <div class="input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M15.0015 1.66675H5.00146C3.61813 1.66675 2.50146 2.77508 2.50146 4.14175V13.2334C2.50146 14.6001 3.61813 15.7167 5.00146 15.7167H5.6348C6.29313 15.7167 6.9348 15.9751 7.40146 16.4417L8.82646 17.8501C9.47646 18.4917 10.5265 18.4917 11.1765 17.8501L12.6015 16.4417C13.0681 15.9751 13.7098 15.7167 14.3681 15.7167H15.0015C16.3848 15.7167 17.5015 14.6001 17.5015 13.2334V4.14175C17.5015 2.77508 16.3848 1.66675 15.0015 1.66675ZM10.0015 4.62508C10.9015 4.62508 11.6265 5.35841 11.6265 6.25008C11.6265 7.13341 10.9265 7.84175 10.0598 7.87508C10.0265 7.87508 9.97646 7.87508 9.9348 7.87508C9.0598 7.84175 8.36813 7.13341 8.36813 6.25008C8.37646 5.35841 9.10146 4.62508 10.0015 4.62508ZM12.2931 12.2417C11.0348 13.0834 8.96813 13.0834 7.7098 12.2417C6.60146 11.5084 6.60146 10.2917 7.7098 9.55008C8.97646 8.70842 11.0431 8.70842 12.2931 9.55008C13.4015 10.2917 13.4015 11.5001 12.2931 12.2417Z"
                    fill="#A7B9D0"
                  />
                </svg>
                <input
                  type="text"
                  v-model="name"
                  v-bind="nameAttrs"
                  :placeholder="$t('name')"
                />
              </div>
              <div class="text-danger">{{ errors.name }}</div>
              <div class="text-danger" v-if="errorsApi">
                {{ errorsApi.name ? errorsApi.name[0] : "" }}
              </div>
            </div>
            <div>
              <div class="input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M9.20817 12.4583L7.6665 14C7.3415 14.325 6.82484 14.325 6.4915 14.0083C6.39984 13.9167 6.30817 13.8333 6.2165 13.7417C5.35817 12.875 4.58317 11.9667 3.8915 11.0167C3.20817 10.0667 2.65817 9.11666 2.25817 8.17499C1.8665 7.22499 1.6665 6.31666 1.6665 5.44999C1.6665 4.88332 1.7665 4.34166 1.9665 3.84166C2.1665 3.33332 2.48317 2.86666 2.92484 2.44999C3.45817 1.92499 4.0415 1.66666 4.65817 1.66666C4.8915 1.66666 5.12484 1.71666 5.33317 1.81666C5.54984 1.91666 5.7415 2.06666 5.8915 2.28332L7.82484 5.00832C7.97484 5.21666 8.08317 5.40832 8.15817 5.59166C8.23317 5.76666 8.27484 5.94166 8.27484 6.09999C8.27484 6.29999 8.2165 6.49999 8.09984 6.69166C7.9915 6.88332 7.83317 7.08332 7.63317 7.28332L6.99984 7.94166C6.90817 8.03332 6.8665 8.14166 6.8665 8.27499C6.8665 8.34166 6.87484 8.39999 6.8915 8.46666C6.9165 8.53332 6.9415 8.58332 6.95817 8.63332C7.10817 8.90832 7.3665 9.26666 7.73317 9.69999C8.10817 10.1333 8.50817 10.575 8.9415 11.0167C9.02484 11.1 9.1165 11.1833 9.19984 11.2667C9.53317 11.5917 9.5415 12.125 9.20817 12.4583Z"
                    fill="#A7B9D0"
                  />
                  <path
                    d="M18.3083 15.275C18.3083 15.5083 18.2667 15.75 18.1833 15.9833C18.1583 16.05 18.1333 16.1167 18.1 16.1833C17.9583 16.4833 17.775 16.7667 17.5333 17.0333C17.125 17.4833 16.675 17.8083 16.1667 18.0167C16.1583 18.0167 16.15 18.025 16.1417 18.025C15.65 18.225 15.1167 18.3333 14.5417 18.3333C13.6917 18.3333 12.7833 18.1333 11.825 17.725C10.8667 17.3167 9.90833 16.7667 8.95833 16.075C8.63333 15.8333 8.30833 15.5917 8 15.3333L10.725 12.6083C10.9583 12.7833 11.1667 12.9167 11.3417 13.0083C11.3833 13.025 11.4333 13.05 11.4917 13.075C11.5583 13.1 11.625 13.1083 11.7 13.1083C11.8417 13.1083 11.95 13.0583 12.0417 12.9667L12.675 12.3417C12.8833 12.1333 13.0833 11.975 13.275 11.875C13.4667 11.7583 13.6583 11.7 13.8667 11.7C14.025 11.7 14.1917 11.7333 14.375 11.8083C14.5583 11.8833 14.75 11.9917 14.9583 12.1333L17.7167 14.0917C17.9333 14.2417 18.0833 14.4167 18.175 14.625C18.2583 14.8333 18.3083 15.0417 18.3083 15.275Z"
                    fill="#A7B9D0"
                  />
                </svg>
                <input
                  type="tel"
                  maxlength="10"
                  name="phone"
                  v-model="phone"
                  v-bind="phoneAttrs"
                  :placeholder="$t('phone')"
                />
                <div class="">966+</div>
              </div>
              <div class="text-danger">{{ errors.phone }}</div>
              <div class="text-danger" v-if="errorsApi">
                {{ errorsApi.phone ? errorsApi.phone[0] : "" }}
              </div>
            </div>
            <div>
              <div class="input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_1_4675)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.33496 2.5C1.95425 2.5 0.834961 3.61929 0.834961 5V15C0.834961 16.3807 1.95425 17.5 3.33496 17.5H16.6683C18.049 17.5 19.1683 16.3807 19.1683 15V5C19.1683 3.61929 18.049 2.5 16.6683 2.5H3.33496ZM5.53514 6.0265C5.18157 5.73187 4.6561 5.77964 4.36146 6.1332C4.06683 6.48676 4.1146 7.01224 4.46816 7.30687L8.40119 10.5844C9.3283 11.357 10.675 11.357 11.6021 10.5844L15.5351 7.30687C15.8887 7.01224 15.9365 6.48676 15.6418 6.1332C15.3472 5.77964 14.8217 5.73187 14.4682 6.0265L10.5351 9.30402C10.2261 9.56156 9.7772 9.56156 9.46816 9.30403L5.53514 6.0265Z"
                      fill="#A7B9D0"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_4675">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.00146484)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <input
                  type="email"
                  v-model="email"
                  v-bind="emailAttrs"
                  :placeholder="$t('email')"
                />
              </div>
              <div class="text-danger">{{ errors.email }}</div>
              <div class="text-danger" v-if="errorsApi">
                {{ errorsApi.email ? errorsApi.email[0] : "" }}
              </div>
            </div>
            <div>
              <div class="input area">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M11.5748 2.40012L7.6665 1.78345C4.40816 1.27512 2.89983 2.37512 2.38316 5.63345L1.7665 9.54178C1.43316 11.6751 1.78316 13.0584 2.9915 13.9001C3.62483 14.3501 4.4915 14.6501 5.6165 14.8251L9.52483 15.4418C12.7832 15.9501 14.2915 14.8501 14.8082 11.5918L15.4165 7.68345C15.5165 7.04178 15.5582 6.46678 15.5248 5.95845C15.4165 3.87512 14.1915 2.80845 11.5748 2.40012ZM6.8665 7.79178C5.8915 7.79178 5.09983 7.00012 5.09983 6.03345C5.09983 5.05845 5.8915 4.26678 6.8665 4.26678C7.83316 4.26678 8.62483 5.05845 8.62483 6.03345C8.62483 7.00012 7.83316 7.79178 6.8665 7.79178Z"
                    fill="#A7B9D0"
                  />
                  <path
                    d="M17.0832 11.225L15.8332 14.9833C14.7915 18.1166 13.1249 18.95 9.99154 17.9083L6.2332 16.6583C5.0582 16.2666 4.2082 15.7833 3.6582 15.175C4.1832 15.3833 4.79154 15.5416 5.4832 15.65L9.39987 16.2666C9.9332 16.35 10.4332 16.3916 10.8999 16.3916C13.6499 16.3916 15.1249 14.9083 15.6332 11.7166L16.2415 7.8083C16.3249 7.32497 16.3582 6.89997 16.3582 6.5083C17.6249 7.54997 17.8082 9.0333 17.0832 11.225Z"
                    fill="#A7B9D0"
                  />
                </svg>
                <textarea
                  name=""
                  :placeholder="$t('mssg')"
                  id=""
                  cols="30"
                  rows="10"
                  v-model="message"
                  v-bind="messageAttrs"
                ></textarea>
              </div>
              <div class="text-danger">{{ errors.message }}</div>
              <div class="text-danger" v-if="errorsApi">
                {{ errorsApi.message ? errorsApi.message[0] : "" }}
              </div>
            </div>
            <button @click="onSubmit()" :disabled="pending" class="gap-4">
              {{ $t("send") }}

              <v-progress-circular
                v-if="pending"
                indeterminate
                :size="30"
                :width="4"
              ></v-progress-circular>
            </button>
          </div>
        </div>
        <div class="col-12 col-xl-6 col-lg-6">
          <div class="map-container">
            <div class="d-flex align-items-center main">
              <div v-if="actMap" class="cities-drop">
                <div v-for="item in store2.branches" :key="item"  class="city">
                  <span class="name"> {{ item.name }} </span>
                  <button @click="openPopup2 = true , frameDiv = item.frame">
                    <svg
                      class="def arrowDir"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M6.50825 1.66675H13.4916C16.5249 1.66675 18.3333 3.47508 18.3333 6.50841V13.4834C18.3333 16.5251 16.5249 18.3334 13.4916 18.3334H6.51658C3.48325 18.3334 1.67492 16.5251 1.67492 13.4917V6.50841C1.66658 3.47508 3.47492 1.66675 6.50825 1.66675ZM5.54158 7.54175L7.49158 13.8251C7.95825 15.3167 10.0499 15.3417 10.5416 13.8584L11.1249 12.1334C11.2833 11.6584 11.6583 11.2751 12.1333 11.1251L13.8666 10.5417C15.3333 10.0501 15.3166 7.94175 13.8249 7.49175L7.54158 5.53341C6.30825 5.15841 5.14992 6.31675 5.54158 7.54175Z"
                        fill="#A7B9D0"
                      />
                    </svg>
                    <svg
                      class="act arrowDir"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M6.50825 1.66675H13.4916C16.5249 1.66675 18.3333 3.47508 18.3333 6.50841V13.4834C18.3333 16.5251 16.5249 18.3334 13.4916 18.3334H6.51658C3.48325 18.3334 1.67492 16.5251 1.67492 13.4917V6.50841C1.66658 3.47508 3.47492 1.66675 6.50825 1.66675ZM5.54158 7.54175L7.49158 13.8251C7.95825 15.3167 10.0499 15.3417 10.5416 13.8584L11.1249 12.1334C11.2833 11.6584 11.6583 11.2751 12.1333 11.1251L13.8666 10.5417C15.3333 10.0501 15.3166 7.94175 13.8249 7.49175L7.54158 5.53341C6.30825 5.15841 5.14992 6.31675 5.54158 7.54175Z"
                        fill="#2D9596"
                      />
                    </svg>
                    <div class="tool">{{ $t("map1") }}</div>
                  </button>
                </div>
              </div>
              <button>
                <img
                  v-if="actMap"
                  @click="actMap = !actMap"
                  src="~/assets/imgs/pin-active.svg"
                  alt="pin"
                />
                <img
                  v-if="!actMap"
                  @click="actMap = !actMap"
                  src="~/assets/imgs/pin.svg"
                  alt="pin"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="details">
        <div class="item">
          <img src="~/assets/imgs/contact-icon1.svg" alt="pin icon" />
          <span> {{ $t("mainAddress") }} </span>
          <p class="text"> {{ store2.websiteData?.address  }}  </p>
        </div>
        <div class="item">
          <img src="~/assets/imgs/contact-icon2.svg" alt="phone icon" />
          <span> {{ $t("phone") }} </span>
          <p> {{ store2.websiteData?.phone  }} </p>
        </div>
        <div class="item">
          <img src="~/assets/imgs/contact-icon3.svg" alt="email icon" />
          <span> {{ $t("email") }} </span>
          <p>  {{ store2.websiteData?.email }} </p>
        </div>
        <div class="item">
          <img src="~/assets/imgs/contact-icon4.svg" alt="time icon" />
          <span> {{ $t("appoint") }} </span>
          <p>  {{ store2.websiteData?.working_time }}   </p>
        </div>
      </div>

      <div class="common">
        <h2>الاسئلة الشائعة</h2>
        <v-expansion-panels class="main-panels">
          <v-expansion-panel v-for="(item, index) in store.questions">
            <v-expansion-panel-title
              collapse-icon="mdi-chevron-up"
              expand-icon="mdi-chevron-down"
            >
              <div class="custom-title">
                <span> {{ `0${index + 1}` }} </span>
                <p>  {{ item.question }} </p>
              </div>
            </v-expansion-panel-title>
            <v-expansion-panel-text>
               {{ item.answer }}
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
        <button class="addMoreBtn" @click="loadMore"> {{ $t('showmore') }} </button>

      </div>

      <div v-if="openPopup2" class="popup-container">
      <div  class="overlay"></div>
      <div class="modal-custom-container">
         <div v-html="frameDiv"></div>
        <button @click="openPopup2 = false" class="close">
          <svg
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
              fill="#A7B9D0"
            />
          </svg>
        </button>
      </div>
    </div>
    <loading v-if="pending2" />

    </div>
  </div>
</template>

<script setup>
import { useContactStore } from "@/stores/contact";
import { useHomeStore } from "@/stores/home";
let store = useContactStore();
import { useForm } from "vee-validate";
import * as yup from "yup";
let actMap = ref(false);
 let store2 = useHomeStore();
 let frameDiv = ref();
//  store.getBranches();
let openPopup2 = ref(false);
const { locale } = useI18n();
let errorsApi = ref();
let pending2 = ref(store.isLoading2);
store.getQuestions();
const pageCount = computed(() => {
  return Math.ceil(store.total / store.per_page);
});


useSeoMeta({
  title: locale.value == 'ar' ? ' تواصل معنا ' : " contact us ",
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
})

const loadMore = async () => {
  if (store.page < pageCount.value) {
    store.page++;
    await store.getQuestions();
  }
};
const { errors, handleSubmit, values, resetForm, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    phone: yup.string().required(),
    message: yup.string().required(),
    name: yup.string().required(),
  }),
});
let pending = ref(store.isLoading);
const [email, emailAttrs] = defineField("email");
const [name, nameAttrs] = defineField("name");
const [message, messageAttrs] = defineField("message");
const [phone, phoneAttrs] = defineField("phone");

const onSubmit = handleSubmit(() => {
  store.getContact(values, resetForm);
});

watch([() => store.isLoading, () => store.errors , ()=> store.isLoading2], ([val1, val2 , val3]) => {
  pending.value = val1;
  errorsApi.value = val2;
  pending2.value = val3
});
</script>
