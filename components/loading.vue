<template>
    <div>
        <div class="loader-page">
      <div class="d-flex flex-column align-items-center main">
        <img class="animated-image" src="../assets/imgs/loader.svg" alt="">

      </div>
    </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
// ::-webkit-scrollbar {
//   display:none;
// }

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes fade {
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
}

.animated-image {
    animation: pulse 1s infinite, fade 1s infinite;
    width:100px;
}
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
    background-color: #00000096;

    z-index: 5555555555;
    text-align: center;
img{
    width: 125px;
}
  }
  

</style>