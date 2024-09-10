<template>
    <div style="min-height: 100vh;">
        <div v-if="aboutArr" class="container about-us">
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
          <span> {{ $t("about") }} </span>
        </div>
        <div>
          <h1 class="title mobileHead">{{ $t("about") }}</h1>
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
            <div class="about-container">
                <div class="row">
                    <div class="col-12 col-xl-7 col-lg-7 order-2 order-xl-1 order-lg-1">
                        <div class="text-container">
                            <div class="text">
                                <h6>{{ $t('about') }}</h6>
                                <div></div>
                                <span> {{ aboutArr.description_card }} </span>
                            </div>
                          
                        </div>
                    </div>
                    <div class="col-12 col-xl-5 col-lg-5 order-1 order-xl-2 order-lg-2">
                        <div class="image">
                        <img :src="aboutArr.image" alt="">
                            <div class="overlay"></div>
                        </div>

                    </div>

                </div>
            </div>
             <div class="d-flex align-items-center justify-content-center">
            <div class="video-container">
             
             <iframe 
             v-if="videoKey"
     :src="`https://www.youtube.com/embed/${videoKey}`"
      title="YouTube video player" frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
             
             </div>
        
        </div>
    </div>
</template>


<script setup>
import axios from 'axios';
const localePath = useLocalePath();
const { locale } = useI18n();

const router = useRouter();


let pending = ref(false);
let aboutArr = ref();
const getAboutData = async ()=>{
    pending.value = true;
  let result = await axios.get(`https://control.codecar.com.sa/api/about`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });

if(result.status == 200){
    pending.value = false;
    aboutArr.value = result.data.data;
}

}

let videoKey = ref(null);
const getDesc = async () => {
  let result = await axios.get(`https://control.codecar.com.sa/api/allsettings`, {
    headers: {
      "Content-Language": `${locale.value}`,
    },
  });
  videoKey.value = result.data.data.video_url;
}
onMounted(() => {
    getDesc();
    getAboutData();
});

</script>

<style>

</style>