<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  items: {
    type: Array,
    required: true,
  },
});

const selectedItem = ref(null);
const showModal = ref(false);

const openModal = (item) => {
  const detail = props.items.find(detail => detail.title === item.title);
  if (detail) {
    selectedItem.value = detail;
    showModal.value = true;
  } else {
    console.error('Item not found:', item.title);
  }
};

const closeModal = () => {
  showModal.value = false;
  selectedItem.value = null;
};
</script>

<template>
  <h2 class="text-3xl font-bold text-center sm:text-4xl hover:text-customLight transition-colors duration-300" v-if="title">
    {{ title }}
  </h2>
  <p class="max-w-3xl mx-auto mt-4 text-lg text-center text-zinc-600 hover:bg-customSecondary hover:text-customLight transition-colors duration-300" v-if="description">
    {{ description }}
  </p>
  <div class="grid gap-8 mt-10 mb-20 md:grid-cols-2 text-customDark ">
    <div
      v-for="item in items"
      :key="item.title"
      class="p-8 border-2 border-dashed rounded sm:p-12 bg-customLight hover:bg-customSecondary hover:text-customLight transition-colors duration-300 cursor-pointer"
      @click="openModal(item)"
    >
      <h3 class="text-2xl font-semibold" v-if="item.title">{{ item.title }}</h3>
      <p class="mt-2 leading-relaxed text-zinc-500" v-if="item.description">
        {{ item.description }}
      </p>
    </div>
  </div>
  <Modal :show="showModal" @close="closeModal">
    <template v-if="selectedItem">
      <h3 class="text-2xl font-semibold text-customDark ">{{ selectedItem.title }}</h3>
      <p class="mt-2 leading-relaxed text-customDark ">{{ selectedItem.LongDescription }}</p>
      <a class="inline-block mt-4 text-customDark duration-300 bg-customAccent px-6 py-3 rounded hover:bg-customSecondary hover:text-customLight transition-colors" :href="selectedItem.link">
        Learn more
        </a>
    </template>
  </Modal>
</template>