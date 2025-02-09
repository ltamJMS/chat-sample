<!-- ChatSection.vue -->
<template>
  <div v-if="chats.length">
    <h3 class="section-header text-lg font-semibold mb-2">{{ title }}</h3>
    <ul>
      <li
        v-for="(chat, index) in chats"
        :key="title + '-' + index"
        class="mb-2 flex items-center"
      >
        <button class="flex-grow text-left py-2 px-3 rounded hover:bg-gray-700">
          {{ chat.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    chats: Array,
  },
};
</script>

<style scoped>
.section-header {
  color: #4f5074;
}
</style>
