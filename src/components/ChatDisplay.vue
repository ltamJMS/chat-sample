<template>
  <div class="max-w-4xl mx-auto space-y-4">
    <div
      v-for="(message, index) in messages"
      :key="index"
      :class="{
        'flex flex-col items-end': message.sender === 'user',
        'flex flex-col items-start': message.sender === 'bot'
      }"
    >
      <div :class="message.sender === 'user' ? 'bg-gray-100 max-w-xs' : ''" class="p-4 rounded-lg">
        <p class="text-base">{{ message.text }}</p>
      </div>
      <!-- Chỉ hiển thị icon nếu đây là tin nhắn của bot và là tin nhắn bot cuối cùng -->
      <div
        v-if="message.sender === 'bot' && index === lastBotMessageIndex"
        class="flex space-x-3 mt-2 mx-4"
      >
        <button class="flex items-center space-x-1 text-sm text-gray-300 hover:text-gray-500">
          <font-awesome-icon :icon="['fas', 'volume-up']" />
        </button>
        <button class="flex items-center space-x-1 text-sm text-gray-300 hover:text-gray-500">
          <font-awesome-icon :icon="['fas', 'copy']" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatDisplay",
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    lastBotMessageIndex() {
      let lastIndex = -1;
      this.messages.forEach((msg, index) => {
        if (msg.sender === 'bot') {
          lastIndex = index;
        }
      });
      return lastIndex;
    },
  },
};
</script>

<style scoped></style>
