<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-1/4 h-full bg-gray-800 text-white p-4">
    <h2 class="text-xl font-bold mb-4">Chats</h2>
    <ul>
      <li v-for="(chat, index) in chats" :key="index" class="mb-2">
        <button class="w-full text-left py-2 px-3 rounded hover:bg-gray-700">
          {{ chat }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chats: ["Chat 1", "Chat 2", "Chat 3"],
    };
  },
};
</script>