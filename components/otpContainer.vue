<template>
    <div>
        
      <div  class="confirm-container">
        <div v-if="changeStat2 == 1" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="otpp" :height="200" :width="200" />
          </client-only>
          <h4>
            {{ $t('otp1') }}
          </h4>
          <p>
            {{ $t('otp2') }}
          </p>

          <v-otp-input v-model="otp" style="direction: ltr !important;" :length="4"
            placeholder="-"></v-otp-input>
          <!-- {{ otp }}
          {{ store.state.otpFin1 }} -->
          <!-- <span class="error-msg2" v-if="error1">{{
          error1
        }}</span> -->
          <button class="resend" @click="resendOtp1()">{{ $t('reOtp') }}</button>

          <button @click="sendOtp()" class="send">{{ $t('follow') }}</button>
        </div>
        <div v-if="changeStat2 == 2" class="confirm-text">
          <client-only>
            <Vue3Lottie :animation-data="success" :height="200" :width="200" />
          </client-only>
          <h4>{{ $t('otp3') }}</h4>
          <p>
            {{ $t('otp4') }}
          </p>

          <div class="order-number">
            <h5>{{ $t('orderNum') }} : <span> dsdsd </span></h5>
            <button @click="copyToClipboard();" class="iconn">
              <img v-if="check" src="~/assets/imgs/sharee1.svg" style="margin-bottom:0px" alt="">
              <svg v-else xmlns="http://www.w3.org/2000/svg" fill="#90a3bf" height="20" width="20"
                viewBox="0 0 448 512">
                <path
                  d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
              </svg>
            </button>
          </div>

          <nuxt-link :to="localePath('/')" class="nav-link">
            <button class="send home">{{ $t('backHome') }}</button>
          </nuxt-link>
        </div>
      </div>
    </div>
</template>
<script setup>
import otpp from "~/assets/animations/otp.json";
import success from "~/assets/animations/success.json";
import { Vue3Lottie } from "vue3-lottie";
let otp = ref("");
let props = defineProps(["changeStat2"]);
</script>
<style lang="scss">
    .confirm-container {
  border-radius: 16px;
  background: #fff;
  padding: 32px;
  // height: 530px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 70px;
  img {
    margin-bottom: 32px;
  }
  .confirm-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 13px;
    h4 {
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      color: #2d3a4a;
    }
    p {
      width: 361px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      color: #5a7184;
    }
    .resend {
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      color: #dcb63b;
      background-color: transparent;
    }
    .send {
      display: flex;
      width: 350px;
      height: 48px;
      padding: 8px 16px;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: 700;
      border-radius: 12px;
      background: #2d3a4a;
      margin-top: 40px;
      &.home {
        color: #2d3a4a;
        background-color: #fff;
        border: 1px solid #2d3a4a;
      }
    }
    .order-number {
      width: 359px;
      padding: 15px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #f9fafb;
      button {
        width: fit-content !important;
        margin: 0px !important;
      }
      h5 {
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        color: #161d25;
        display: flex;
        align-items: center;
        gap: 6px;
        span {
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          color: #5a7184;
          margin-top: 3px;
        }
      }
    }
  }
}
</style>