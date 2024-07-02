<template>
  <div style="min-height: 100vh">
    <div class="container contact-page">
      <div class="text-page">
        <div class="breadline">
          <span>{{ $t('home') }}</span>
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
          <span> {{ $t('contactt') }} </span>
        </div>
        <div>
          <h1 class="title"> {{ $t('contactt') }} </h1>
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
              <input type="text" :placeholder="$t('name')" />
            </div>
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
              <input type="email" :placeholder="$t('email')" />
            </div>
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
              ></textarea>
            </div>
            <button> {{ $t('send') }} </button>
          </div>
        </div>
        <div class="col-12 col-xl-6 col-lg-6">
          <div class="map-container">
            <div class="d-flex align-items-center main">
              <div v-if="actMap" class="cities-drop">
                <div v-for="i in 4" class="city">
                  <span class="name"> جدة </span>
                  <button>
                    <svg
                    class="def"
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
                    class="act"
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
                    <div class="tool"> {{ $t('map1') }} </div>
                  </button>
                </div>
              </div>
              <button>
              <img v-if="actMap"  @click="actMap = !actMap" src="~/assets/imgs/pin-active.svg" alt="" />
              <img v-if="!actMap" @click="actMap = !actMap" src="~/assets/imgs/pin.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="details">
       <div class="item">
        <img src="~/assets/imgs/contact-icon1.svg" alt="">
        <span> {{ $t('mainAddress') }} </span>
        <p> جدة - حي الربوة - شارع المكرونه </p>
       </div>
       <div class="item">
        <img src="~/assets/imgs/contact-icon2.svg" alt="">
        <span> {{ $t('phone') }} </span>
        <p> 00966555098590 </p>
       </div>
       <div class="item">
        <img src="~/assets/imgs/contact-icon3.svg" alt="">
        <span> {{ $t('email') }} </span>
        <p> Autolease@Khalejauto.Sa </p>
       </div>
       <div class="item">
        <img src="~/assets/imgs/contact-icon4.svg" alt="">
        <span> {{ $t('appoint') }} </span>
        <p> من السبت الي الخميس من الساعه ال7 صباحا - حتي ال5 مساء
         </p>
       </div>
      </div>

      <div class="common">
       <h2> الاسئلة الشائعة </h2>
       <v-expansion-panels class="main-panels">
                <v-expansion-panel v-for="i , index in 6">
                  <v-expansion-panel-title
                    collapse-icon="mdi-chevron-up"
                    expand-icon="mdi-chevron-down"
                  >
                    <div class="custom-title">
                      <span> {{ `0${index + 1}` }} </span>
                      <p> ماهي العروض اللي تقدمها شركة الخليج للسيارات </p>
                    </div>
                  </v-expansion-panel-title>
                  <v-expansion-panel-text>
                    سيارة مرسيدس GLC 300 2023 واحدة من سيارات الدفع الرباعي
                    الفاخرة بالتصميم الجذاب بقوة 245 حصان ناقل حركة اتوماتيك دفع
                    رباعي و سعة 2 لتر ومن الداخل بها أعلى الدرجات من الراحة.
                  </v-expansion-panel-text>
                </v-expansion-panel>
              </v-expansion-panels>
      </div>
    </div>
  </div>
</template>


<script setup>
 let actMap = ref(false);
</script>
