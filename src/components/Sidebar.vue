<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-1/4 h-full bg-gray-800 text-white p-4">
    <h2 class="title text-xl font-bold mb-4">Recent Chats</h2>

    <ChatSection
      v-for="(chatList, period) in chatPeriods"
      :key="period"
      :title="period"
      :chats="chatList"
      @renameChat="renameChat"
      @deleteChat="deleteChat"
    />
  </div>
</template>

<script>
import ChatSection from "./ChatSection.vue";

export default {
  components: {
    ChatSection,
  },
  data() {
    return {
      chats: [
        { name: "Chat 1", timestamp: new Date() - 10000 },
        { name: "Chat 2", timestamp: new Date() - 86400000 },
        { name: "Chat 3", timestamp: new Date() - 172800000 },
        // Add more chat objects with Unix timestamps as needed
      ],
    };
  },
  computed: {
    chatPeriods() {
      return {
        Today: this.chats.filter((chat) => this.isToday(chat.timestamp)),
        Yesterday: this.chats.filter((chat) =>
          this.isYesterday(chat.timestamp)
        ),
        "Previous 7 Days": this.chats.filter((chat) =>
          this.isWithinLastDays(chat.timestamp, 7)
        ),
        "Previous 30 Days": this.chats.filter((chat) =>
          this.isWithinLastDays(chat.timestamp, 30)
        ),
      };
    },
  },
  methods: {
    isToday(timestamp) {
      const today = new Date();
      const chatDate = new Date(timestamp);
      return today.toDateString() === chatDate.toDateString();
    },
    isYesterday(timestamp) {
      const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
      const chatDate = new Date(timestamp);
      return yesterday.toDateString() === chatDate.toDateString();
    },
    isWithinLastDays(timestamp, days) {
      const pastDate = new Date(
        new Date().setDate(new Date().getDate() - days)
      );
      return new Date(timestamp) > pastDate;
    },
    renameChat(chatIndex) {
      console.log("Renaming chat with index:", chatIndex);
    },
    deleteChat(chatIndex) {
      console.log("Deleting chat with index:", chatIndex);
    },
  },
};
</script>

<style scoped>
.title {
  color: #4f5074;
}
</style>
