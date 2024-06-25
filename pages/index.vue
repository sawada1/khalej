<template>
  <div style="min-height: 100vh;">
    <div class="hero-section" style="width: 100%; height: 100vh">
      <img
        class="w-100 h-100"
        style="object-fit: cover"
        src="~/assets/imgs/hero.png"
        alt=""
      />
    </div>
      <div class="container">
        <div class="search-home">
          <div class="inp">
            <label for="">الماركة</label>
            <div
              :id="dropdown1.id"
              class="dropdown-container search"
              @click="dropdown1.toggle()"
            >
              <button class="dropdown-toggle-container">
                {{
                  dropdown1.selected.title
                    ? dropdown1.selected.title
                    : dropdown1.selected
                }}
                <img src="~/assets/imgs/Small2.svg" alt="" />
                <div class="icon"></div>
              </button>
              <div v-if="dropdown1.isOpen" class="dropdown-menu" @click.stop>
                <!-- @click.prevent="dropdown1.select(item.title)" -->
                <div
                  class="dropdown-item"
                  @click.prevent="dropdown1.select(item)"
                  v-for="item in dropdown1.items"
                  :key="item.id"
                  :for="`checkBox-${item.id}`"
                >
                  <span>
                    {{ item.title }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="inp">
            <label for=""> الموديل </label>
            <div
              :id="dropdown2.id"
              class="dropdown-container search"
              @click="dropdown2.toggle()"
            >
              <button class="dropdown-toggle-container">
                {{
                  dropdown2.selected.title
                    ? dropdown2.selected.title
                    : dropdown2.selected
                }}
                <img src="~/assets/imgs/Small2.svg" alt="" />
                <div class="icon"></div>
              </button>
              <div v-if="dropdown2.isOpen" class="dropdown-menu" @click.stop>
                <!-- @click.prevent="dropdown1.select(item.title)" -->
                <div
                  class="dropdown-item"
                  @click.prevent="dropdown2.select(item)"
                  v-for="item in dropdown2.items"
                  :key="item.id"
                  :for="`checkBox-${item.id}`"
                >
                  <span>
                    {{ item.title }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="inp">
            <label for=""> الاسم </label>
            <div
              :id="dropdown3.id"
              class="dropdown-container search"
              @click="dropdown3.toggle()"
            >
              <button class="dropdown-toggle-container">
                {{
                  dropdown3.selected.title
                    ? dropdown3.selected.title
                    : dropdown3.selected
                }}
                <img src="~/assets/imgs/Small2.svg" alt="" />
                <div class="icon"></div>
              </button>
              <div v-if="dropdown3.isOpen" class="dropdown-menu" @click.stop>
                <!-- @click.prevent="dropdown1.select(item.title)" -->
                <div
                  class="dropdown-item"
                  @click.prevent="dropdown3.select(item)"
                  v-for="item in dropdown3.items"
                  :key="item.id"
                  :for="`checkBox-${item.id}`"
                >
                  <span>
                    {{ item.title }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button class="searchBtn">{{ $t("search") }}</button>
        </div>
      </div>
      <div class="container explore-brands-section mb-5">
        <div class="text d-flex flex-column align-items-center text-center ">
         <h1> <span> استكشف </span> افضل الماركات </h1>
         <p>  استكشف تشكيلة متنوعة من أفضل الماركات العالمية لتلبية احتياجاتك المختلفة وتجربة القيادة بأسلوب فريد.  </p>
        </div>
          <brands></brands>
      </div>
      <div class="container why-choose-section">
        <div class="text d-flex flex-column align-items-center text-center ">
         <h2> لماذا <span> تختارنا </span> </h2>
         <p>  استكشف تشكيلة متنوعة من أفضل الماركات العالمية لتلبية احتياجاتك المختلفة وتجربة القيادة بأسلوب فريد.  </p>
        </div>
        <div class="row">
         <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="box mb-5 mb-xl-0">
             <img src="~/assets/imgs/icon1.svg" alt="">
             <h5> تجربة شراء سلسة </h5>
             <p> نعمل جاهدين لجعل تجربة شراء السيارة أكثر سلاسة وراحة لعملائنا. مع توفير إمكانية التصفح الإلكتروني لمختلف الماركات </p>
          </div>
         </div>
         <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="box mb-5 mb-xl-0">
             <img src="~/assets/imgs/icon2.svg" alt="">
             <h5> سعرنا هو الأفضل </h5>
             <p> نحرص دائمًا على تقديم أسعار تنافسية لا تقبل المنافسة، مما يجعل تجربة الشراء معنا لا تضاهى من حيث القيمة والتميز </p>
          </div>
         </div>
         <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="box mb-5 mb-xl-0">
             <img src="~/assets/imgs/icon3.svg" alt="">
             <h5> خدمة عملاء مميزة </h5>
             <p> نتفرد بخدمة عملاء استثنائية ودعم شامل يضمن لك تجربة شراء لا تضاهى، حيث نولي اهتمامًا فائقًا في كل مرحلة من مراحل الشراء </p>
          </div>
         </div>
         <div class="col-12 col-xl-3 col-lg-4 col-md-6">
          <div class="box">
             <img src="~/assets/imgs/icon4.svg" alt="">
             <h5> الاستشارات الائتمانية </h5>
             <p> نتفرد بخدمة عملاء استثنائية ودعم شامل يضمن لك تجربة شراء لا تضاهى، حيث نولي اهتمامًا فائقًا في كل مرحلة من مراحل الشراء </p>
          </div>
         </div>
        </div>
      </div>

      <div class="cars-section-home">
       <div class="container">
        <div class="text">
         <h2> السيارات </h2>
         <p> انطلق في رحلة اختيار سيارتك المثالية   </p>
        </div>

        <div class="row">
         <div v-for="i , index in 4" class="col-12 col-xl-3 col-lg-4 col-md-6" :class="{'mb-5 mb-xl-0': index != 3}">
          <car-card></car-card>
         </div>
         <div class="d-flex align-items-center justify-content-center">
          <button class="more-btn"> المزيد </button>
         </div>
        </div>
       </div>
      </div>

      <div class="container">
        <div class="payment-order-section">
          <div class="custom-row row position-relative">
            <div class="col-12 col-xl-6  col-lg-6 d-flex align-items-cente justify-content-cen mb-5 mb-xl-0 mb-lg-0">
              <div class="main-one d-flex flex-column">
                <div class="text-contaier">
                  <h2> طلب شراء </h2>
                  <p> إرفق البيانات المطلوبة وسنقوم بمساعدتك فورا  لشراء السيارة التي ترغب بها, بأقل نسبة مرابحة وأفضل عرض تمويلي من مختلف البنوك وشركات التمويل المعتمدة لدينا. </p>
                </div>
                <div class="image-container">
                 <div class="text">
                   <h3> افراد </h3>
                   <button> 
                    طلب شراء
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5247 4.72498H4.72473L4.72472 12.525H5.77472L5.77473 6.51744L12.7497 13.4924L13.4922 12.75L6.51719 5.77498H12.5247V4.72498Z" fill="white"/>
</svg>  
                  </button>
                  <img src="~/assets/imgs/order2.png" alt="">
                 </div>
                </div>
              </div>

            </div>
            <div class="col-12 position-relative col-xl-6 col-lg-6 d-flex align-items-cente justify-content-">
              <div class="position-sticky   image-container">
                 <div class="text">
                   <h3> افراد </h3>
                   <button> 
                    طلب شراء
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5247 4.72498H4.72473L4.72472 12.525H5.77472L5.77473 6.51744L12.7497 13.4924L13.4922 12.75L6.51719 5.77498H12.5247V4.72498Z" fill="white"/>
</svg>  
                  </button>
                  <img src="~/assets/imgs/order1.png" alt="">
                 </div>
                </div>
            </div>
          </div>
        </div>

      </div>
      <div class="container">
        <div class="how-work-section">
          <div class="row">
            <div class="col-12 col-xl-4 col-lg-4">
              <div class="text-container">
                 <span> كيف نعمل </span>
                 <h2> نبذل كل جهدنا لتحقيق سيارة احلامك </h2>
                 <p> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من  </p>
                 <button> تواصل معنا </button>
              </div>
            </div>
            <div class="col-12 col-xl-8 col-lg-8">
              <div class="row cards">
                <div v-for="item , index in howArr"  class="col-12 col-xl-6 col-lg-6">
                  <div class="main-card d-flex align-items-center  justify-content-center">
                    
                      <div class="num">
                        <svg class="default" xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 105 105" fill="none">
  <circle opacity="0.15" cx="52.5" cy="52.5" r="52.5" fill="#A7B9D0"/>
</svg>
<svg class="active" xmlns="http://www.w3.org/2000/svg" width="105" height="105" viewBox="0 0 105 105" fill="none">
  <circle cx="52.5" cy="52.5" r="52.5" fill="white"/>
</svg>
                         <span> {{`0${index + 1}.`}} </span>
                      </div>
                      <div class="text-card d-flex flex-column">
                         <h5> {{ item.title }} </h5>
                         <p> هذا النص هو مثال حي يستبدل في نفس المساحة </p>
                      </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
let howArr = ref([
  {
  title:"ابحث"
},
{
  title:"اختر"
},
{
  title:"اطلب"
},
{
  title:"نتواصل"
}
])
const dropdown1 = ref(
  new Dropdown(" اختر ماركة السيارة ", [
    { id: 1, title: "option 1" },
    { id: 2, title: "option 2" },
    { id: 3, title: "option 3" },
    { id: 4, title: "option 4" },
  ])
);
const dropdown2 = ref(
  new Dropdown(" اختر موديل السيارة ", [
    { id: 1, title: "option 1" },
    { id: 2, title: "option 2" },
    { id: 3, title: "option 3" },
    { id: 4, title: "option 4" },
  ])
);
const dropdown3 = ref(
  new Dropdown(" اختر اسم السيارة ", [
    { id: 1, title: "option 1" },
    { id: 2, title: "option 2" },
    { id: 3, title: "option 3" },
    { id: 4, title: "option 4" },
  ])
);

let obj = ref({
  val1: "",
  val2: "",
  val3: "",
});

watch(
  [
    () => dropdown1.value.selected,
    () => dropdown2.value.selected,
    () => dropdown3.value.selected,
  ],
  ([val1, val2, val3]) => {
    obj.value.val1 = val1.id;
    obj.value.val2 = val2.id;
    obj.value.val3 = val3.id;
  }
);

const handleClickOutside = (event) => {
  dropdown1.value.handleClickOutside(event);
  dropdown2.value.handleClickOutside(event);
  dropdown3.value.handleClickOutside(event);
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style></style>
