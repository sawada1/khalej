<template>
    <div style="min-height: 100vh;">
        <div class="all-cars-container">

            <div class="text-page">
                <div class="d-flex align-items-center  flex-column w-100 justify-content-center">

                    <div class="breadline">
                        <span>الرئيسية</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path
                                d="M9.99998 13.28L5.65331 8.9333C5.13998 8.41997 5.13998 7.57997 5.65331 7.06664L9.99998 2.71997"
                                stroke="#A7B9D0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                        <span>المعرض</span>
                    </div>
                    <div>
                        <h1 class="title">
                            المعرض
                        </h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="3" viewBox="0 0 50 3" fill="none">
                            <rect x="11.9048" width="38.0952" height="3.00022" rx="1.50011" fill="#2D9596" />
                            <rect opacity="0.9" width="7.14286" height="3.00022" rx="1.50011" fill="#2D9596" />
                        </svg>
                    </div>

                </div>
                <div class="container filter-container">
                    <button class="filter-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M9.33355 9.1314C9.33355 8.99978 9.37251 8.87111 9.44552 8.7616L12.8179 3.70305C13.1132 3.26002 12.7956 2.66659 12.2632 2.66659H3.73725C3.20478 2.66659 2.88719 3.26002 3.18255 3.70305L6.55492 8.7616C6.62792 8.87111 6.66688 8.99978 6.66688 9.1314V13.0581C6.66688 13.5817 7.24285 13.9009 7.68688 13.6234L9.02022 12.7901C9.21514 12.6683 9.33355 12.4546 9.33355 12.2248V9.1314ZM10.6669 9.5351C10.6669 9.40349 10.7058 9.27481 10.7788 9.1653L13.9273 4.44265C14.8134 3.11354 13.8606 1.33325 12.2632 1.33325H3.73725C2.13986 1.33325 1.18708 3.11354 2.07315 4.44265L5.22158 9.1653C5.29459 9.27481 5.33355 9.40349 5.33355 9.5351V13.0581C5.33355 14.629 7.06145 15.5866 8.39355 14.7541L9.72688 13.9208C10.3116 13.5553 10.6669 12.9143 10.6669 12.2248V9.5351Z"
                                fill="#363F4D" />
                        </svg>
                        تصفية
                    </button>
                    <div  class="inp">
                        <label for="">الماركة</label>
                        <div v-if="dropdown1" :id="dropdown1.id" class="dropdown-container cars" @click="dropdown1.toggle()">
                            <button class="dropdown-toggle-container">
                                <span class="text-drop">
                                    {{ dropdown1.selected.title ? dropdown1.selected.title : dropdown1.selected }}
                                </span> 
                                <img class="icon" :class="{'active': dropdown1.isOpen}" src="~/assets/imgs/Small.svg" alt="" />
                            </button>
                            <div v-if="dropdown1.isOpen" class="dropdown-menu" @click.stop>
                                <label class="dropdown-item" @click="dropdown1.select(item)"
                                    v-for="item, index in dropdown1.items" :key="item.id" :for="`checkBox-${item.id}`">
                                    <div class="w-100 d-flex align-items-center justify-content-between">
                                            <span>
                                                {{ item.title }}
                                            </span>
                                        <input :id="`checkBox-${item.id}`" type="checkbox" v-model="arr"
                                            :value="item.id">
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>


<script setup>

let arr = ref([]);
const dropdown1 = ref(null);
if (process.client) {
      dropdown1.value = new Dropdown("اختر بين الماركات", [
        { id: 1, title: "option 1" },
        { id: 2, title: "option 2" },
        { id: 3, title: "option 3" },
        { id: 4, title: "option 4" },
      ]);
}

const handleClickOutside = (event) => {
    if(dropdown1.value){
        dropdown1.value.handleClickOutside(event);
    }
    
};


onMounted(() => {
    if(process.client){
        document.addEventListener("click", handleClickOutside);
    }
});
// onUnmounted(() => {
//     document.removeEventListener("click", handleClickOutside);
// });

</script>