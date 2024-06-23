<template>
     <div ref="dropdown" class="dropdown" @click.stop="toggleDropdown">
    <button class="dropdown-toggle">{{ selected }}</button>
    <div v-if="isOpen" class="dropdown-menu">
      <a
        class="dropdown-item"
        href="#"
        @click.prevent="selectItem(item)"
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </a>
    </div>
  </div>
</template>


<script setup>
 let props = defineProps(["items"]);
 const isOpen = ref(false);
    const selected = ref('Select an option');
    const dropdown = ref(null);

    const toggleDropdown = (event) => {
      event.stopPropagation();
      isOpen.value = !isOpen.value;
    };

    const selectItem = (item) => {
      selected.value = item;
      isOpen.value = false;
    };

    const handleClickOutside = (event) => {
      if (dropdown.value && !dropdown.value.contains(event.target)) {
        isOpen.value = false;
      }
    };

    onMounted(() => {
      document.addEventListener('click', handleClickOutside);
    });

    onBeforeUnmount(() => {
      document.removeEventListener('click', handleClickOutside);
    });
</script>