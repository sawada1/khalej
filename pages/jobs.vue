<template>
  <div style="min-height: 100vh">
    <div class="container jobs-container">
      <div class="text-page">
        <div class="breadline">
          <span>{{ $t("home") }}</span>
          <svg class="arrowDir" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"
            fill="none">
            <path d="M9.99998 13.28L5.65331 8.9333C5.13998 8.41997 5.13998 7.57997 5.65331 7.06664L9.99998 2.71997"
              stroke="#A7B9D0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
          <span> {{ $t("jobss") }} </span>
        </div>
        <div>
          <h1 class="title">{{ $t("jobss") }}</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="3" viewBox="0 0 50 3" fill="none">
            <rect x="11.9048" width="38.0952" height="3.00022" rx="1.50011" fill="#2D9596" />
            <rect opacity="0.9" width="7.14286" height="3.00022" rx="1.50011" fill="#2D9596" />
          </svg>
        </div>
      </div>

      <div class="all-jobs">
        <div v-for="item in store.careers" class="job">
          <h4>{{ item.title }}</h4>
          <div class="d-flex align-items-center flex-column flex-xl-row flex-lg-row w-100 justify-content-between">
            <p>
              {{ item.short_description }}
            </p>
            <button @click="
                actJob = !actJob, 
                job.title = item.title,
                 job.id = item.id,
                 job.city = item.city?.title
              ">
              {{ $t("apply") }}
              <svg class="arrowDir" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"
                fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M12.5252 4.7251H4.72521L4.72521 12.5251H5.77521L5.77521 6.51756L12.7502 13.4926L13.4927 12.7501L6.51768 5.7751H12.5252V4.7251Z"
                  fill="white" />
              </svg>
            </button>
          </div>
          <div class="d-flex align-items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.6201 8.45C19.5701 3.83 15.5401 1.75 12.0001 1.75C12.0001 1.75 12.0001 1.75 11.9901 1.75C8.4601 1.75 4.4201 3.82 3.3701 8.44C2.2001 13.6 5.3601 17.97 8.2201 20.72C9.2801 21.74 10.6401 22.25 12.0001 22.25C13.3601 22.25 14.7201 21.74 15.7701 20.72C18.6301 17.97 21.7901 13.61 20.6201 8.45ZM12.0001 13.46C10.2601 13.46 8.8501 12.05 8.8501 10.31C8.8501 8.57 10.2601 7.16 12.0001 7.16C13.7401 7.16 15.1501 8.57 15.1501 10.31C15.1501 12.05 13.7401 13.46 12.0001 13.46Z"
                fill="#2D9596" />
            </svg>
            <span> {{ item.city?.title }} </span>
          </div>
        </div>
      </div>
      <div v-if="store.isLoading3" class="d-flex align-items-center justify-content-center" style="min-height: 30vh;">
        <img class="animated-image" src="../assets/imgs/loader.svg" alt="">
      </div>
      <div class="d-flex align-items-center justify-content-center mt-10">
        <button class="addMoreBtn" v-if="store.page < pageCount" @click="loadMore"> {{ $t('showmore') }} </button>

      </div>
    </div>

    <div v-if="actJob" class="popup-container">
      <div @click="actJob = !actJob" class="overlay"></div>
      <div class="modal-form">
        <div class="d-flex align-items-center justify-content-between w-100 header-form">
          <div class="apply-div">
            <span> {{ $t("applyTo") }} </span>
          </div>
          <button @click="actJob = !actJob">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L8 6.58579L13.2929 1.29289C13.6834 0.902369 14.3166 0.902369 14.7071 1.29289C15.0976 1.68342 15.0976 2.31658 14.7071 2.70711L9.41421 8L14.7071 13.2929C15.0976 13.6834 15.0976 14.3166 14.7071 14.7071C14.3166 15.0976 13.6834 15.0976 13.2929 14.7071L8 9.41421L2.70711 14.7071C2.31658 15.0976 1.68342 15.0976 1.29289 14.7071C0.902369 14.3166 0.902369 13.6834 1.29289 13.2929L6.58579 8L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z"
                fill="#A7B9D0" />
            </svg>
          </button>
        </div>
        <div class="head">
          <h5>{{ job.title }}</h5>
          <div class="line"></div>
          <div class="d-flex align-items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.6201 8.45C19.5701 3.83 15.5401 1.75 12.0001 1.75C12.0001 1.75 12.0001 1.75 11.9901 1.75C8.4601 1.75 4.4201 3.82 3.3701 8.44C2.2001 13.6 5.3601 17.97 8.2201 20.72C9.2801 21.74 10.6401 22.25 12.0001 22.25C13.3601 22.25 14.7201 21.74 15.7701 20.72C18.6301 17.97 21.7901 13.61 20.6201 8.45ZM12.0001 13.46C10.2601 13.46 8.8501 12.05 8.8501 10.31C8.8501 8.57 10.2601 7.16 12.0001 7.16C13.7401 7.16 15.1501 8.57 15.1501 10.31C15.1501 12.05 13.7401 13.46 12.0001 13.46Z"
                fill="#2D9596" />
            </svg>
            <span> {{ job.city }} </span>
          </div>
        </div>
        <div class="inputs">
          <div class="input-custom">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path
                d="M15 2.00604H5C3.61667 2.00604 2.5 3.11438 2.5 4.48104V13.5727C2.5 14.9394 3.61667 16.056 5 16.056H5.63333C6.29167 16.056 6.93333 16.3144 7.4 16.781L8.825 18.1894C9.475 18.831 10.525 18.831 11.175 18.1894L12.6 16.781C13.0667 16.3144 13.7083 16.056 14.3667 16.056H15C16.3833 16.056 17.5 14.9394 17.5 13.5727V4.48104C17.5 3.11438 16.3833 2.00604 15 2.00604ZM10 4.96438C10.9 4.96438 11.625 5.69771 11.625 6.58938C11.625 7.47271 10.925 8.18104 10.0583 8.21438C10.025 8.21438 9.975 8.21438 9.93333 8.21438C9.05833 8.18104 8.36667 7.47271 8.36667 6.58938C8.375 5.69771 9.1 4.96438 10 4.96438ZM12.2917 12.581C11.0333 13.4227 8.96667 13.4227 7.70833 12.581C6.6 11.8477 6.6 10.631 7.70833 9.88938C8.975 9.04771 11.0417 9.04771 12.2917 9.88938C13.4 10.631 13.4 11.8394 12.2917 12.581Z"
                fill="#A7B9D0" />
            </svg>
            <div class="label-container">
              <label for=""> {{ $t("enterName") }}</label>
              <input type="text" v-model="name" v-bind="nameAttrs" :placeholder="$t('name')" />
            </div>
          </div>
          <div class="text-danger">{{ errors.name }}</div>
          <div class="text-danger" v-if="errorsApi">
            {{ errorsApi.name ? errorsApi.name[0] : "" }}
          </div>
          <div class="input-custom">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M9.20817 12.4583L7.6665 14C7.3415 14.325 6.82484 14.325 6.4915 14.0083C6.39984 13.9167 6.30817 13.8333 6.2165 13.7417C5.35817 12.875 4.58317 11.9667 3.8915 11.0167C3.20817 10.0667 2.65817 9.11666 2.25817 8.17499C1.8665 7.22499 1.6665 6.31666 1.6665 5.44999C1.6665 4.88332 1.7665 4.34166 1.9665 3.84166C2.1665 3.33332 2.48317 2.86666 2.92484 2.44999C3.45817 1.92499 4.0415 1.66666 4.65817 1.66666C4.8915 1.66666 5.12484 1.71666 5.33317 1.81666C5.54984 1.91666 5.7415 2.06666 5.8915 2.28332L7.82484 5.00832C7.97484 5.21666 8.08317 5.40832 8.15817 5.59166C8.23317 5.76666 8.27484 5.94166 8.27484 6.09999C8.27484 6.29999 8.2165 6.49999 8.09984 6.69166C7.9915 6.88332 7.83317 7.08332 7.63317 7.28332L6.99984 7.94166C6.90817 8.03332 6.8665 8.14166 6.8665 8.27499C6.8665 8.34166 6.87484 8.39999 6.8915 8.46666C6.9165 8.53332 6.9415 8.58332 6.95817 8.63332C7.10817 8.90832 7.3665 9.26666 7.73317 9.69999C8.10817 10.1333 8.50817 10.575 8.9415 11.0167C9.02484 11.1 9.1165 11.1833 9.19984 11.2667C9.53317 11.5917 9.5415 12.125 9.20817 12.4583Z"
                fill="#A7B9D0" />
              <path
                d="M18.3083 15.275C18.3083 15.5083 18.2667 15.75 18.1833 15.9833C18.1583 16.05 18.1333 16.1167 18.1 16.1833C17.9583 16.4833 17.775 16.7667 17.5333 17.0333C17.125 17.4833 16.675 17.8083 16.1667 18.0167C16.1583 18.0167 16.15 18.025 16.1417 18.025C15.65 18.225 15.1167 18.3333 14.5417 18.3333C13.6917 18.3333 12.7833 18.1333 11.825 17.725C10.8667 17.3167 9.90833 16.7667 8.95833 16.075C8.63333 15.8333 8.30833 15.5917 8 15.3333L10.725 12.6083C10.9583 12.7833 11.1667 12.9167 11.3417 13.0083C11.3833 13.025 11.4333 13.05 11.4917 13.075C11.5583 13.1 11.625 13.1083 11.7 13.1083C11.8417 13.1083 11.95 13.0583 12.0417 12.9667L12.675 12.3417C12.8833 12.1333 13.0833 11.975 13.275 11.875C13.4667 11.7583 13.6583 11.7 13.8667 11.7C14.025 11.7 14.1917 11.7333 14.375 11.8083C14.5583 11.8833 14.75 11.9917 14.9583 12.1333L17.7167 14.0917C17.9333 14.2417 18.0833 14.4167 18.175 14.625C18.2583 14.8333 18.3083 15.0417 18.3083 15.275Z"
                fill="#A7B9D0" />
            </svg>
            <div class="label-container">
              <label for=""> {{ $t("enterPhone") }}</label>
              <input type="tel" name="phone" maxlength="10" v-model="phone" v-bind="phoneAttrs"
                :placeholder="$t('phone')" />
            </div>

            <div class="num">966+</div>

          </div>
          <div class="text-danger">{{ errors.phone }}</div>
          <div class="text-danger" v-if="errorsApi">
            {{ errorsApi.phone ? errorsApi.phone[0] : "" }}
          </div>
          <div class="input-custom">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M3.3335 2.83936C1.95278 2.83936 0.833496 3.95864 0.833496 5.33936V15.3394C0.833496 16.7201 1.95278 17.8394 3.3335 17.8394H16.6668C18.0475 17.8394 19.1668 16.7201 19.1668 15.3394V5.33936C19.1668 3.95864 18.0475 2.83936 16.6668 2.83936H3.3335ZM5.53367 6.36586C5.18011 6.07122 4.65464 6.11899 4.36 6.47256C4.06536 6.82612 4.11313 7.35159 4.4667 7.64623L8.39972 10.9237C9.32684 11.6963 10.6735 11.6963 11.6006 10.9237L15.5337 7.64623C15.8872 7.35159 15.935 6.82612 15.6404 6.47256C15.3457 6.11899 14.8203 6.07122 14.4667 6.36586L10.5337 9.64338C10.2246 9.90091 9.77573 9.90091 9.4667 9.64338L5.53367 6.36586Z"
                fill="#A7B9D0" />
            </svg>
            <div class="label-container">
              <label for=""> {{ $t("enterEmail") }}</label>
              <input type="email" v-model="email" v-bind="emailAttrs" :placeholder="$t('email')" />
            </div>
          </div>
          <div class="text-danger">{{ errors.email }}</div>
          <div class="text-danger" v-if="errorsApi">
            {{ errorsApi.email ? errorsApi.email[0] : "" }}
          </div>
          <div class="main-folder-container">
            <label for="cv-inputt" class="folder-container">
              <div @dragover.prevent="handleDragOver" @dragleave.prevent="handleDragLeave" @drop.prevent="handleDrop"
                class="d-flex flex-column align-items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                  <path
                    d="M16.6445 6.60375V0.0625H2.11133C1.6472 0.0625 1.20208 0.246874 0.873891 0.575063C0.545703 0.903252 0.361328 1.34837 0.361328 1.8125V27.7663C0.361328 28.9638 1.14633 29.9375 2.11133 29.9375H22.2501C21.8728 29.5216 21.6636 28.9803 21.6632 28.4188V26.715H19.9601C19.3584 26.715 18.7813 26.476 18.3558 26.0505C17.9304 25.625 17.6913 25.048 17.6913 24.4463C17.6913 23.8445 17.9304 23.2675 18.3558 22.842C18.7813 22.4165 19.3584 22.1775 19.9601 22.1775H21.6638V20.4737C21.6644 20.0657 21.7748 19.6654 21.9835 19.3148C22.1922 18.9642 22.4914 18.6763 22.8498 18.4812C23.2082 18.2862 23.6125 18.1913 24.0202 18.2065C24.4279 18.2217 24.8241 18.3464 25.167 18.5675V8.505H18.5457C18.0417 8.50434 17.5585 8.30382 17.202 7.94741C16.8456 7.591 16.6451 7.10779 16.6445 6.60375ZM10.0626 10.9469H15.5626C15.662 10.9469 15.7574 10.9864 15.8277 11.0567C15.8981 11.127 15.9376 11.2224 15.9376 11.3219C15.9376 11.4213 15.8981 11.5167 15.8277 11.587C15.7574 11.6574 15.662 11.6969 15.5626 11.6969H10.0626C9.96312 11.6969 9.86774 11.6574 9.79741 11.587C9.72709 11.5167 9.68758 11.4213 9.68758 11.3219C9.68758 11.2224 9.72709 11.127 9.79741 11.0567C9.86774 10.9864 9.96312 10.9469 10.0626 10.9469ZM5.09445 10.9469H7.43758C7.53703 10.9469 7.63242 10.9864 7.70274 11.0567C7.77307 11.127 7.81258 11.2224 7.81258 11.3219C7.81258 11.4213 7.77307 11.5167 7.70274 11.587C7.63242 11.6574 7.53703 11.6969 7.43758 11.6969H5.09633C4.99687 11.6969 4.90149 11.6574 4.83116 11.587C4.76084 11.5167 4.72133 11.4213 4.72133 11.3219C4.72133 11.2224 4.76084 11.127 4.83116 11.0567C4.90149 10.9864 4.99687 10.9469 5.09633 10.9469H5.09445ZM5.09445 14.625H7.43758C7.53703 14.625 7.63242 14.6645 7.70274 14.7348C7.77307 14.8052 7.81258 14.9005 7.81258 15C7.81258 15.0995 7.77307 15.1948 7.70274 15.2652C7.63242 15.3355 7.53703 15.375 7.43758 15.375H5.09633C4.99687 15.375 4.90149 15.3355 4.83116 15.2652C4.76084 15.1948 4.72133 15.0995 4.72133 15C4.72133 14.9005 4.76084 14.8052 4.83116 14.7348C4.90149 14.6645 4.99687 14.625 5.09633 14.625H5.09445ZM11.7438 19.0531H5.09633C4.99687 19.0531 4.90149 19.0136 4.83116 18.9433C4.76084 18.873 4.72133 18.7776 4.72133 18.6781C4.72133 18.5787 4.76084 18.4833 4.83116 18.413C4.90149 18.3426 4.99687 18.3031 5.09633 18.3031H11.7457C11.8452 18.3031 11.9405 18.3426 12.0109 18.413C12.0812 18.4833 12.1207 18.5787 12.1207 18.6781C12.1207 18.7776 12.0812 18.873 12.0109 18.9433C11.9405 19.0136 11.8452 19.0531 11.7457 19.0531H11.7438ZM10.0626 15.375C9.96312 15.375 9.86774 15.3355 9.79741 15.2652C9.72709 15.1948 9.68758 15.0995 9.68758 15C9.68758 14.9005 9.72709 14.8052 9.79741 14.7348C9.86774 14.6645 9.96312 14.625 10.0626 14.625H13.712C13.8114 14.625 13.9068 14.6645 13.9771 14.7348C14.0474 14.8052 14.087 14.9005 14.087 15C14.087 15.0995 14.0474 15.1948 13.9771 15.2652C13.9068 15.3355 13.8114 15.375 13.712 15.375H10.0626ZM18.3932 19.0531H14.1757C14.0762 19.0531 13.9809 19.0136 13.9105 18.9433C13.8402 18.873 13.8007 18.7776 13.8007 18.6781C13.8007 18.5787 13.8402 18.4833 13.9105 18.413C13.9809 18.3426 14.0762 18.3031 14.1757 18.3031H18.3951C18.4945 18.3031 18.5899 18.3426 18.6602 18.413C18.7306 18.4833 18.7701 18.5787 18.7701 18.6781C18.7701 18.7776 18.7306 18.873 18.6602 18.9433C18.5899 19.0136 18.4945 19.0531 18.3951 19.0531H18.3932ZM20.432 15.375H17.0188C16.9194 15.375 16.824 15.3355 16.7537 15.2652C16.6833 15.1948 16.6438 15.0995 16.6438 15C16.6438 14.9005 16.6833 14.8052 16.7537 14.7348C16.824 14.6645 16.9194 14.625 17.0188 14.625H20.432C20.5314 14.625 20.6268 14.6645 20.6971 14.7348C20.7674 14.8052 20.807 14.9005 20.807 15C20.807 15.0995 20.7674 15.1948 20.6971 15.2652C20.6268 15.3355 20.5314 15.375 20.432 15.375ZM20.807 11.3219C20.807 11.4213 20.7674 11.5167 20.6971 11.587C20.6268 11.6574 20.5314 11.6969 20.432 11.6969H18.0001C17.9006 11.6969 17.8052 11.6574 17.7349 11.587C17.6646 11.5167 17.6251 11.4213 17.6251 11.3219C17.6251 11.2224 17.6646 11.127 17.7349 11.0567C17.8052 10.9864 17.9006 10.9469 18.0001 10.9469H20.4332C20.5324 10.9472 20.6275 10.9869 20.6976 11.0572C20.7676 11.1274 20.807 11.2226 20.807 11.3219Z"
                    fill="#363F4D" />
                  <path
                    d="M17.394 0.586884V6.60438C17.3945 6.9095 17.516 7.20198 17.7318 7.41767C17.9476 7.63337 18.2402 7.75468 18.5453 7.75501H24.6309L17.394 0.586884Z"
                    fill="#363F4D" />
                  <path
                    d="M27.9052 22.9275H25.8264C25.727 22.9275 25.6316 22.888 25.5612 22.8177C25.4909 22.7473 25.4514 22.6519 25.4514 22.5525V20.4737C25.4514 20.0709 25.2914 19.6846 25.0066 19.3998C24.7218 19.115 24.3355 18.955 23.9327 18.955C23.5299 18.955 23.1436 19.115 22.8587 19.3998C22.5739 19.6846 22.4139 20.0709 22.4139 20.4737V22.5525C22.4139 22.6519 22.3744 22.7473 22.3041 22.8177C22.2337 22.888 22.1384 22.9275 22.0389 22.9275H19.9602C19.5574 22.9275 19.1711 23.0875 18.8862 23.3723C18.6014 23.6571 18.4414 24.0434 18.4414 24.4462C18.4414 24.849 18.6014 25.2353 18.8862 25.5202C19.1711 25.805 19.5574 25.965 19.9602 25.965H22.0389C22.1384 25.965 22.2337 26.0045 22.3041 26.0748C22.3744 26.1451 22.4139 26.2405 22.4139 26.34V28.4187C22.4139 28.8215 22.5739 29.2078 22.8587 29.4927C23.1436 29.7775 23.5299 29.9375 23.9327 29.9375C24.3355 29.9375 24.7218 29.7775 25.0066 29.4927C25.2914 29.2078 25.4514 28.8215 25.4514 28.4187V26.34C25.4514 26.2405 25.4909 26.1451 25.5612 26.0748C25.6316 26.0045 25.727 25.965 25.8264 25.965H27.9052C28.308 25.965 28.6943 25.805 28.9791 25.5202C29.2639 25.2353 29.4239 24.849 29.4239 24.4462C29.4239 24.0434 29.2639 23.6571 28.9791 23.3723C28.6943 23.0875 28.308 22.9275 27.9052 22.9275Z"
                    fill="#363F4D" />
                </svg>
                <input type="file" ref="fileInput" id="cv-inputt" @change="handleFileChange" v-bind="cvAttrs"
                  style="display: none" />
                <span> {{ $t("cv1") }} </span>
                <div v-if="file">
                  <span>{{ file.name }}</span>
                </div>
              </div>
            </label>
            <p>{{ $t("cv2") }}</p>
          </div>
          <div class="text-danger">{{ errors.cv }}</div>
          <div class="text-danger" v-if="errorsApi">
            {{ errorsApi.cv ? errorsApi.cv[0] : "" }}
          </div>
          <button @click="onSubmit()" :disabled="pending">
            {{ $t("apply") }}
            <v-progress-circular v-if="pending" indeterminate :size="30" :width="4"></v-progress-circular>
          </button>
        </div>
      </div>
    </div>
    <loading v-if="pending2" />

  </div>
</template>

<script setup>
let actJob = ref(false);
import { useCareerStore } from "@/stores/career";
let store = useCareerStore();
const { locale } = useI18n();
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { useForm } from "vee-validate";
import * as yup from "yup";

const fileInput = ref(null);
const file = ref(null);
const isDragging = ref(false);

const handleDragOver = () => {
  isDragging.value = true;
};

const handleDragLeave = () => {
  isDragging.value = false;
};

const handleDrop = (event) => {
  isDragging.value = false;
  const droppedFile = event.dataTransfer.files[0];
  file.value = droppedFile;
  console.log(file.value);
};

const validateFileType = (file) => {
      const allowedExtensions = ['application/pdf', 'image/png', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      return allowedExtensions.includes(file.type);
    };

const handleFileChange = (event) => {
  cvAttrs.value.onChange();
      const selectedFile = event.target.files[0];
      if (validateFileType(selectedFile)) {
        file.value = selectedFile;
        console.log(file.value);
        cv.value = file.value;
      } else {
        alert('Invalid file type. Only PDF, PNG, and DOC/DOCX are allowed.');
      }
};

let errorsApi = ref();
let pending2 = ref(store.isLoading2);
store.getCareer();
let careers = ref(store.careers);
let job = ref({
  title: "",
  id: "",
  city:""
});
const pageCount = computed(() => {
  return Math.ceil(store.total / store.per_page);
});

const loadMore = async () => {
  if (store.page < pageCount.value) {
    store.page++;
    await store.getCareer();
  }
};

const { errors, handleSubmit, values, resetForm, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email(locale.value == 'ar' ? 'يجب أن يكون البريد الإلكتروني بريدًا إلكترونيًا صالحًا' : 'email must be a valid email').required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
    phone: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
    cv: yup.mixed().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
    name: yup.string().required(locale.value == 'ar' ? 'هذا الحقل مطلوب' : 'this field is required'),
  }),
});
let pending = ref(store.isLoading);
const [email, emailAttrs] = defineField("email");
const [name, nameAttrs] = defineField("name");
const [phone, phoneAttrs] = defineField("phone");
const [cv, cvAttrs] = defineField('cv', {
  initialValue: file.value,
});
const applyJob = () => {
  Swal.fire({
    title: "Good job!",
    text: "You clicked the button!",
    icon: "success",
    confirmButtonColor: "#2D9596",
    // cancelButtonColor: '#d33',
    confirmButtonText: "Done",
    // timer: 1500
  });
};
const onSubmit = handleSubmit(() => {
  store.getContact(values, resetForm , job.value.id , cv.value);
});

useSeoMeta({
  title: locale.value == 'ar' ? 'الوظائف' : " jobs ",
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
})

watch(
  [() => store.isLoading, () => store.errors, () => store.isLoading2 , ()=> store.active],
  ([val1, val2, val3 , val4]) => {
    pending.value = val1;
    errorsApi.value = val2;
    pending2.value = val3;
    if(!pending.value){
      // actJob.value = false;
      file.value = null;
    }
  }
);
</script>

<style>
.file-upload {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 2px dashed #ccc;
  border-radius: 10px;
  text-align: center;
}

.upload-area {
  padding: 20px;
  cursor: pointer;
}

.upload-area.dragging {
  background-color: #e9f7ff;
  border-color: #007bff;
}

ul {
  list-style: none;
  padding: 0;
  margin: 10px 0 0;
}

li {
  padding: 5px 0;
}
</style>
