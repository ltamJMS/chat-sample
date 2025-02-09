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
        "With all the hype around AI tools like Chat-GPT, I felt it could benefit from a redesign to elevate the user experience. For me, it feels like a good way to show how features could be implemented.",
        "How can I help you?",
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
