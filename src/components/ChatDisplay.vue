<template>
  <div class="max-w-4xl mx-auto space-y-4">
    <div
      v-for="(message, index) in messages"
      :key="index"
      :class="{
        'flex justify-end': message.sender === 'user',
        'flex justify-start': message.sender === 'bot'
      }"
    >
      <div
        :class="message.sender === 'user' ? 'bg-gray-100 max-w-xs' : ''"
        class="p-4 rounded-lg "
      >
        <p class="text-base">{{ message.text }}</p>
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
};
</script>

<style scoped>
</style>
