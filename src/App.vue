<template>
  <div class="h-screen flex">
    <Sidebar />
    <div class="flex flex-col w-3/4">
      <ChatDisplay :messages="messages" />
      <MessageInput @send-message="addMessage" />
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import ChatDisplay from "./components/ChatDisplay.vue";
import MessageInput from "./components/MessageInput.vue";

export default {
  components: {
    Sidebar,
    ChatDisplay,
    MessageInput,
  },
  data() {
    return {
      messages: [
        "Hello",
        "How can I help you?",
        "I need information about Vue.js.",
      ],
    };
  },
  methods: {
    addMessage(newMessage) {
      this.messages.push(newMessage);
    },
  },
};
</script>
