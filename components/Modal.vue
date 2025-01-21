<template>
  <div v-if="show" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-8 rounded shadow-lg max-w-lg w-full relative">
      <button @click="close" class="absolute top-2 right-2 text-gray-600 hover:text-gray-900">&times;</button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(['close']);
const close = () => emit('close');
</script>