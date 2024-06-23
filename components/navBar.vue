<template>
  <div>
    <nav
      class="navbar navbar-expand-xl"
      :class="{
        active: activeNav,
        back:
          route.name !=
          `${locale == 'ar' ? 'index___ar___default' : 'index___en'}`,
      }"
    >
      <div
        class="container items w-100 d-flex align-items-center justify-content-between"
      >
        <div class="logo navbar-brand">
          <nuxt-link :to="localePath('/')">
            <div class="logo-container">
              <img class="dark-img" src="~/assets/imgs/Logo.svg" alt="" />
              <img
                class="white-img"
                src="~/assets/imgs/Logo-active.svg"
                alt=""
              />
            </div>
          </nuxt-link>
        </div>
        <button
          class="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="sr-only"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="links navbar-nav justify-content-center w-100">
            <nuxt-link class="nav-link" :to="localePath('/')">{{
              $t("home")
            }}</nuxt-link>
            <nuxt-link class="nav-link" :to="localePath('/market')">{{
              $t("market")
            }}</nuxt-link>
            <div class="nav-link">
              {{ $t("reqOrd") }}
            </div>
            <!-- :class="{ 'active': store.state.newActive }" -->
            <nuxt-link class="nav-link" :to="localePath('/news')">
              {{ $t("news") }}
            </nuxt-link>
            <nuxt-link class="nav-link" :to="localePath('/offers')">{{
              $t("offers")
            }}</nuxt-link>
            <nuxt-link class="nav-link" :to="localePath('/contact')">
              {{ $t("contact") }}
            </nuxt-link>
          </div>

          <div
            class="icons justify-content-center justify-content-xl-start justify-content-lg-start justify-content-md-start mt-4 mt-xl-0 mt-lg-0 mt-md-0"
          >
            <span @click="changeLang()" class="nav-link lang">{{
              $t("lang")
            }}</span>
            <div
              @click="overlay = !overlay"
              class="icon d-none d-xl-flex d-lg-flex"
            >
              <svg
                class="white-img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.0252 16.1671L19.4689 18.6344C20.1478 19.3198 19.1297 20.3484 18.4508 19.6629L16.0069 17.1954C13.0712 19.6407 8.74031 19.4538 6.01897 16.7054C3.11347 13.771 3.11347 9.01339 6.01897 6.07898C8.92447 3.14457 13.6352 3.14457 16.5407 6.07898C19.2623 8.82767 19.4471 13.2022 17.0252 16.1671ZM15.5225 7.10735C13.1793 4.74089 9.38035 4.74089 7.0372 7.10735C4.69406 9.47381 4.69406 13.3106 7.0372 15.6771C9.38035 18.0435 13.1793 18.0435 15.5225 15.6771C17.8656 13.3106 17.8656 9.47381 15.5225 7.10735Z"
                  fill="#2D9596"
                />
              </svg>
              <svg
                class="dark-img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.0252 16.1671L19.4689 18.6344C20.1478 19.3198 19.1297 20.3484 18.4508 19.6629L16.0069 17.1954C13.0712 19.6407 8.74031 19.4538 6.01897 16.7054C3.11347 13.771 3.11347 9.01339 6.01897 6.07898C8.92447 3.14457 13.6352 3.14457 16.5407 6.07898C19.2623 8.82767 19.4471 13.2022 17.0252 16.1671ZM15.5225 7.10735C13.1793 4.74089 9.38035 4.74089 7.0372 7.10735C4.69406 9.47381 4.69406 13.3106 7.0372 15.6771C9.38035 18.0435 13.1793 18.0435 15.5225 15.6771C17.8656 13.3106 17.8656 9.47381 15.5225 7.10735Z"
                  fill="white"
                />
              </svg>
            </div>
            <div v-if="overlay" class="searchBar">
              <div class="inp">
                <label for="">dsd</label>
                <div
                  :id="dropdown2.id"
                  class="dropdown"
                  @click="dropdown2.toggle()"
                >
                  <button class="dropdown-toggle">
                    {{ dropdown2.selected }}
                  </button>
                  <div v-if="dropdown2.isOpen"  class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#"
                      @click.prevent="dropdown2.select(item)"
                      v-for="item in dropdown2.items"
                      :key="item"
                    >
                      {{ item }}
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="inp">
                <label for="">dsd</label>
                <!-- <CustomDropdown :items="['Option A', 'Option B', 'Option C']" /> -->
                <div
                  :id="dropdown1.id"
                  class="dropdown"
                  @click="dropdown1.toggle()"
                >
                  <button class="dropdown-toggle">
                    {{ dropdown1.selected }}
                  </button>
                  <div v-if="dropdown1.isOpen"  class="dropdown-menu">
                    <a
                      class="dropdown-item"
                      href="#"
                      @click.prevent="dropdown1.select(item)"
                      v-for="item in dropdown1.items"
                      :key="item"
                    >
                      {{ item }}
                    </a>
                  </div>
                </div>
              </div>
              <button>{{ $t("search") }}</button>
              <!-- <div @click="goCarsFilterByName()" class="iconn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="26"
                  viewBox="0 0 24 26"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.0254 17.0477L19.4691 19.515C20.148 20.2005 19.1299 21.229 18.451 20.5435L16.0071 18.076C13.0714 20.5213 8.7405 20.3345 6.01915 17.586C3.11365 14.6516 3.11365 9.89401 6.01915 6.9596C8.92465 4.02519 13.6354 4.02519 16.5409 6.9596C19.2625 9.70828 19.4473 14.0828 17.0254 17.0477ZM15.5227 7.98796C13.1795 5.6215 9.38053 5.6215 7.03739 7.98796C4.69424 10.3544 4.69424 14.1912 7.03739 16.5577C9.38053 18.9241 13.1795 18.9241 15.5227 16.5577C17.8658 14.1912 17.8658 10.3544 15.5227 7.98796Z"
                    fill="white"
                  />
                </svg>
              </div> -->
            </div>
            <div
              v-if="overlay"
              @click="overlay = !overlay"
              class="overlay"
            ></div>

            <nuxt-link :to="localePath('/wishlist')" class="nav-link icon">
              <svg
                class="dark-img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4.80957C10.8321 3.6888 9.24649 3 7.5 3C3.91015 3 1 5.91015 1 9.5C1 15.8683 7.97034 19.385 10.8138 20.5547C11.5796 20.8697 12.4204 20.8697 13.1862 20.5547C16.0297 19.385 23 15.8682 23 9.5C23 5.91015 20.0899 3 16.5 3C14.7535 3 13.1679 3.6888 12 4.80957Z"
                  fill="white"
                />
              </svg>
              <svg
                class="white-img"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4.80957C10.8321 3.6888 9.24649 3 7.5 3C3.91015 3 1 5.91015 1 9.5C1 15.8683 7.97034 19.385 10.8138 20.5547C11.5796 20.8697 12.4204 20.8697 13.1862 20.5547C16.0297 19.385 23 15.8682 23 9.5C23 5.91015 20.0899 3 16.5 3C14.7535 3 13.1679 3.6888 12 4.80957Z"
                  fill="#ED3F3F"
                />
              </svg>
            </nuxt-link>
            <div
              class="nav-link icon d-flex align-items-center gap-3"
              style="white-space: nowrap"
            >
              <span>(001) 88451234</span>
              <svg
                class="white-img"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.20817 12.4584L7.6665 14.0001C7.3415 14.3251 6.82484 14.3251 6.4915 14.0084C6.39984 13.9167 6.30817 13.8334 6.2165 13.7417C5.35817 12.8751 4.58317 11.9667 3.8915 11.0167C3.20817 10.0667 2.65817 9.11675 2.25817 8.17508C1.8665 7.22508 1.6665 6.31675 1.6665 5.45008C1.6665 4.88341 1.7665 4.34175 1.9665 3.84175C2.1665 3.33341 2.48317 2.86675 2.92484 2.45008C3.45817 1.92508 4.0415 1.66675 4.65817 1.66675C4.8915 1.66675 5.12484 1.71675 5.33317 1.81675C5.54984 1.91675 5.7415 2.06675 5.8915 2.28341L7.82484 5.00841C7.97484 5.21675 8.08317 5.40841 8.15817 5.59175C8.23317 5.76675 8.27484 5.94175 8.27484 6.10008C8.27484 6.30008 8.2165 6.50008 8.09984 6.69175C7.9915 6.88341 7.83317 7.08341 7.63317 7.28341L6.99984 7.94175C6.90817 8.03341 6.8665 8.14175 6.8665 8.27508C6.8665 8.34175 6.87484 8.40008 6.8915 8.46675C6.9165 8.53341 6.9415 8.58341 6.95817 8.63341C7.10817 8.90841 7.3665 9.26675 7.73317 9.70008C8.10817 10.1334 8.50817 10.5751 8.9415 11.0167C9.02484 11.1001 9.1165 11.1834 9.19984 11.2667C9.53317 11.5917 9.5415 12.1251 9.20817 12.4584Z"
                  fill="#A7B9D0"
                />
                <path
                  d="M18.3083 15.275C18.3083 15.5083 18.2667 15.75 18.1833 15.9833C18.1583 16.05 18.1333 16.1166 18.1 16.1833C17.9583 16.4833 17.775 16.7666 17.5333 17.0333C17.125 17.4833 16.675 17.8083 16.1667 18.0166C16.1583 18.0166 16.15 18.025 16.1417 18.025C15.65 18.225 15.1167 18.3333 14.5417 18.3333C13.6917 18.3333 12.7833 18.1333 11.825 17.725C10.8667 17.3166 9.90833 16.7666 8.95833 16.075C8.63333 15.8333 8.30833 15.5916 8 15.3333L10.725 12.6083C10.9583 12.7833 11.1667 12.9166 11.3417 13.0083C11.3833 13.025 11.4333 13.05 11.4917 13.075C11.5583 13.1 11.625 13.1083 11.7 13.1083C11.8417 13.1083 11.95 13.0583 12.0417 12.9666L12.675 12.3416C12.8833 12.1333 13.0833 11.975 13.275 11.875C13.4667 11.7583 13.6583 11.7 13.8667 11.7C14.025 11.7 14.1917 11.7333 14.375 11.8083C14.5583 11.8833 14.75 11.9916 14.9583 12.1333L17.7167 14.0916C17.9333 14.2416 18.0833 14.4166 18.175 14.625C18.2583 14.8333 18.3083 15.0416 18.3083 15.275Z"
                  fill="#A7B9D0"
                />
              </svg>

              <svg
                class="dark-img"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.20866 12.4584L7.66699 14.0001C7.34199 14.3251 6.82533 14.3251 6.49199 14.0084C6.40033 13.9167 6.30866 13.8334 6.21699 13.7417C5.35866 12.8751 4.58366 11.9667 3.89199 11.0167C3.20866 10.0667 2.65866 9.11675 2.25866 8.17508C1.86699 7.22508 1.66699 6.31675 1.66699 5.45008C1.66699 4.88341 1.76699 4.34175 1.96699 3.84175C2.16699 3.33341 2.48366 2.86675 2.92533 2.45008C3.45866 1.92508 4.04199 1.66675 4.65866 1.66675C4.89199 1.66675 5.12533 1.71675 5.33366 1.81675C5.55033 1.91675 5.74199 2.06675 5.89199 2.28341L7.82533 5.00841C7.97533 5.21675 8.08366 5.40841 8.15866 5.59175C8.23366 5.76675 8.27533 5.94175 8.27533 6.10008C8.27533 6.30008 8.21699 6.50008 8.10033 6.69175C7.99199 6.88341 7.83366 7.08341 7.63366 7.28341L7.00033 7.94175C6.90866 8.03341 6.86699 8.14175 6.86699 8.27508C6.86699 8.34175 6.87533 8.40008 6.89199 8.46675C6.91699 8.53341 6.94199 8.58341 6.95866 8.63341C7.10866 8.90841 7.36699 9.26675 7.73366 9.70008C8.10866 10.1334 8.50866 10.5751 8.94199 11.0167C9.02532 11.1001 9.11699 11.1834 9.20033 11.2667C9.53366 11.5917 9.54199 12.1251 9.20866 12.4584Z"
                  fill="white"
                />
                <path
                  d="M18.3083 15.275C18.3083 15.5083 18.2667 15.75 18.1833 15.9833C18.1583 16.05 18.1333 16.1166 18.1 16.1833C17.9583 16.4833 17.775 16.7666 17.5333 17.0333C17.125 17.4833 16.675 17.8083 16.1667 18.0166C16.1583 18.0166 16.15 18.025 16.1417 18.025C15.65 18.225 15.1167 18.3333 14.5417 18.3333C13.6917 18.3333 12.7833 18.1333 11.825 17.725C10.8667 17.3166 9.90833 16.7666 8.95833 16.075C8.63333 15.8333 8.30833 15.5916 8 15.3333L10.725 12.6083C10.9583 12.7833 11.1667 12.9166 11.3417 13.0083C11.3833 13.025 11.4333 13.05 11.4917 13.075C11.5583 13.1 11.625 13.1083 11.7 13.1083C11.8417 13.1083 11.95 13.0583 12.0417 12.9666L12.675 12.3416C12.8833 12.1333 13.0833 11.975 13.275 11.875C13.4667 11.7583 13.6583 11.7 13.8667 11.7C14.025 11.7 14.1917 11.7333 14.375 11.8083C14.5583 11.8833 14.75 11.9916 14.9583 12.1333L17.7167 14.0916C17.9333 14.2416 18.0833 14.4166 18.175 14.625C18.2583 14.8333 18.3083 15.0416 18.3083 15.275Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";
const toast = useToast();

const localePath = useLocalePath();
const { locale, setLocale } = useI18n();

let overlay = ref(false);
let router = useRouter();
let route = useRoute();
let activeNav = ref(false);
class Dropdown {
  constructor(selected = "Select an option", items = []) {
    this.isOpen = false;
    this.selected = selected;
    this.items = items;
    this.id = `dropdown-${Math.random().toString(36)}`;
  }

  toggle() {
    // event.stopPropagation();
    console.log(this);
    this.isOpen = !this.isOpen;
  }

  select(item) {
    this.selected = item;
    this.isOpen = false;
  }
  handleClickOutside(event) {
    const dropdownElement = document.getElementById(this.id);
    if (this.isOpen && dropdownElement && !dropdownElement.contains(event.target)) {
      this.isOpen = false;
    console.log(this);
    }
  }
}

const dropdown1 = ref(new Dropdown("Select an option", [
  "Option 1",
  "Option 2",
  "Option 3",
]));
console.log(dropdown1);
const dropdown2 = ref(new Dropdown("Select an option", [
  "Option A",
  "Option B",
  "Option C",
]));

const handleClickOutside = (event) => {
  dropdown1.value.handleClickOutside(event);
  dropdown2.value.handleClickOutside(event);
  // Add more dropdowns handling as needed
};

const changeLang = async () => {
  locale.value = locale.value === "en" ? "ar" : "en";
  if (locale.value == "ar") {
    setLocale("ar");
    useHead({
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
    });
  } else {
    useHead({
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
    });
    setLocale("en");
  }
  console.log(route);
  const query = useRoute().query;
  getFooterData();
  await navigateTo(
    localePath({ path: useRoute().path, query: query }, undefined, {
      preserveQuery: true,
    })
  );
};
const goCarsFilterByName = () => {
  router.push(
    localePath({ path: "/cars", query: { search: searchValue.value } })
  );
  overlay.value = false;
};

onMounted(() => {
  window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 300) {
      activeNav.value = true;
    } else if (window.scrollY == 0) {
      activeNav.value = false;
    }
    // if (this.window.scrollY >= 300) {
    //   arrowActive.value = true;
    // } else if (window.scrollY == 0) {
    //   arrowActive.value = false;
    // }
  });
  document.addEventListener("click", handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style lang="scss">
.navbar-toggler .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  margin-top: 5px;
  background-color: #fff;
  margin-bottom: 4px;
}

.navbar-toggler.collapsed .icon-bar {
  background-color: #fff;
}

.navbar {
  .navbar-toggler {
    // background-color: #fff;
    outline: none !important;
    border: none !important;
    color: transparent !important;
  }

  &.back,
  &.active {
    .icon-bar {
      background-color: #000;
    }

    .navbar-toggler.collapsed .icon-bar {
      background-color: #555;
    }
  }
}

.navbar-toggler.collapsed span.icon-bar:nth-child(2) {
  -webkit-transform: translateY(0) rotate(0);
  transform: translateY(0) rotate(0);
}

.navbar-toggler.collapsed span.icon-bar:nth-child(3) {
  opacity: 1;
}

.navbar-toggler.collapsed span.icon-bar:nth-child(4) {
  -webkit-transform: translateY(0) rotate(0);
  transform: translateY(0) rotate(0);
}

.navbar-toggler span.icon-bar {
  -webkit-transition: all 300ms;
  transition: all 300ms;
}

.navbar-toggler span.icon-bar:nth-child(2) {
  -webkit-transform: translateY(301%) rotate(40deg);
  transform: translateY(350%) rotate(40deg);
}

.navbar-toggler span.icon-bar:nth-child(3) {
  opacity: 0;
}

.navbar-toggler span.icon-bar:nth-child(4) {
  -webkit-transform: translateY(-301%) rotate(-45deg);
  transform: translateY(-330%) rotate(-45deg);
}
</style>
