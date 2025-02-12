<template>
  <div class="h-screen bg-white flex">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <header class="h-12 border-b flex items-center px-4 justify-between">
        <div class="flex items-center gap-2">
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-4.553a2 2 0 10-2.828-2.828L12 7.172 7.275 2.447a2 2 0 00-2.828 2.828L9 10m3 0v10" />
          </svg>
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20h9m-9 0V10m0 10H6a2 2 0 01-2-2V6a2 2 0 012-2h6m3 10l4-4m0 0l-4-4m4 4H9" />
          </svg>
          <span>ChatGPT</span>
          <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div class="flex items-center gap-4">
          <span class="text-sm">メモリがいっぱいです</span>
          <button class="text-sm text-blue-500 hover:underline">共有する</button>
        </div>
      </header>

      <div class="flex-1 p-4 overflow-y-auto">
        <ChatDisplay />
      </div>

      <div class="border-t p-4">
        <MessageInput />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import ChatDisplay from './components/ChatDisplay.vue';
import MessageInput from './components/MessageInput.vue';

export default {
  components: {
    Sidebar,
    ChatDisplay,
    MessageInput
  }
};
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
