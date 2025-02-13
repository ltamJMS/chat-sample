<template>
  <div class="h-screen bg-white flex">
    <Sidebar />
    <div class="flex-1 flex flex-col">
      <HeaderBar />
      <div class="flex-1 p-4 overflow-y-auto">
        <ChatDisplay :messages="messages" />
      </div>
      <div class="p-4">
        <MessageInput @send="handleSendMessage" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Sidebar from "./components/Sidebar.vue";
import HeaderBar from "./components/HeaderBar.vue";
import ChatDisplay from "./components/ChatDisplay.vue";
import MessageInput from "./components/MessageInput.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    HeaderBar,
    ChatDisplay,
    MessageInput,
  },
  setup() {
    const messages = ref([]);

    const handleSendMessage = (msg) => {
      messages.value.push({ text: msg, sender: "user" });
      messages.value.push({
        text: "Hello, how can I help you?",
        sender: "bot",
      });
    };

    return {
      messages,
      handleSendMessage,
    };
  },
};
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
