<template>
  <div class="h-screen bg-white flex">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <HeaderBar />
      <div class="flex-1 p-4 overflow-y-auto">
        <ChatDisplay />
      </div>
      <div class="p-4">
        <MessageInput />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import HeaderBar from "./components/HeaderBar.vue";
import ChatDisplay from "./components/ChatDisplay.vue";
import MessageInput from "./components/MessageInput.vue";

export default {
  components: {
    Sidebar,
    HeaderBar,
    ChatDisplay,
    MessageInput,
  },
};
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
