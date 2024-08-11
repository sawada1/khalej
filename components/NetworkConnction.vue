<template>
    <div   class="loader-page">
      <div class="d-flex flex-column align-items-center main">
        <client-only>
          <Vue3Lottie :animation-data="cart" :height="300" :width="300" />
        </client-only>
        <h4>يبدو أن اتصال الانترنت قد انقطع!</h4>
        <p class="p-text">
          عذرًا، توقفت الرحلة! يبدو أن اتصال الانترنت قد انقطع. نحن هنا لإعادتك
          إلى الطريق الصحيح. ارتقِ بمقعدك واستمتع بالرحلة، سنكون معك في لحظة.
        </p>
        <button>اعادة المحاولة</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Vue3Lottie } from "vue3-lottie";
  import cart from "~/assets/animations/car2.json";
 
  </script>
  
  <style lang="scss">
  .loader-page {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    z-index: 5555555555;
    text-align: center;
    h4 {
      color: #2d3a4a;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      margin-bottom: 16px;
    }
    p {
      margin-bottom: 40px;
      width: 450px;
    }
    button {
      display: flex;
      width: 400px;
      height: 56px;
      padding: 0px 8px;
      justify-content: center;
      align-items: center;
      border-radius: 12px;
      border: 1px solid #2d3a4a;
      color: #2d3a4a;
      font-weight: 700;
    }
  }
  
  @media(max-width:900px){
    .loader-page{
      h4{
        font-size: 22px;
      }
      .main{
        padding: 20px;
      }
      p{
        width: 100%;
      }
      button{
      width: 100% !important;
      height: 48px;
      }
    }
  }
  </style>
  