<template>
  <div class="max-w-3xl mx-auto space-y-4">
    <div
      v-for="(message, index) in messages"
      :key="index"
      :class="{
        'flex justify-end': message.sender === 'user',
        'flex justify-start': message.sender === 'bot'
      }"
    >
      <div
        :class="message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'"
        class="p-4 rounded-lg max-w-xs"
      >
        <p class="text-sm">{{ message.text }}</p>
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
