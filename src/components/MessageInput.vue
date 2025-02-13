<template>
  <div class="flex flex-col justify-center items-center h-full">
    <div class="flex flex-col items-center space-y-2 p-4 w-3/5 rounded-2xl border border-gray-300 shadow-sm">
      <!-- Ô nhập tin nhắn -->
      <textarea v-model="message"
        class="w-full h-14 p-3 bg-transparent border-none resize-none focus:outline-none focus:ring-0"
        placeholder="Nhắn tin cho ChatGPT"></textarea>

      <!-- Button Actions -->
      <div class="flex justify-between w-full space-x-2">
        <div class="flex space-x-2">
          <button
            class="w-10 h-10 flex items-center justify-center space-x-2 px-4 py-2 bg-transparent border border-gray-300 rounded-full hover:bg-gray-300">
            <font-awesome-icon :icon="['fas', 'plus']" class="text-gray-600 w-4 h-4" />
          </button>

          <button ref="tooltipButton"
            class="flex items-center space-x-2 px-4 py-1 bg-transparent border border-gray-300 rounded-full hover:bg-gray-300">
            <font-awesome-icon :icon="['fas', 'globe']" class="text-gray-600 w-4 h-4" />
            <span class="text-sm text-gray-600">Tìm kiếm</span>
          </button>

          <button
            class="w-10 h-10 flex items-center justify-center space-x-2 px-4 py-2 bg-transparent border border-gray-300 rounded-full hover:bg-gray-300">
            <font-awesome-icon :icon="['fas', 'ellipsis']" class="text-gray-600 w-5 h-5" />
          </button>
        </div>

        <button
          class="h-10 w-10 flex items-center justify-center px-3 py-2 bg-black text-white rounded-full hover:bg-gray-600"
          @click="sendMessage">
          <font-awesome-icon :icon="['fas', 'arrow-up']" class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

export default {
  setup() {
    const tooltipButton = ref(null);

    onMounted(() => {
      tippy(tooltipButton.value, {
        content: "Tìm kiếm trên web",
        placement: "top",
      });
    });

    return { tooltipButton };
  }
};

</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
