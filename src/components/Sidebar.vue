<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :class="['sidebar', { 'w-1/4': !isCollapsed, 'w-16': isCollapsed }]"
    class="h-full bg-gray-800 text-white flex flex-col justify-between p-4"
  >
    <!-- Top Section with Collapse Button -->
    <div class="flex items-center justify-start w-full">
      <button @click="toggleSidebar" class="collapse-toggle text-white">
        <font-awesome-icon :icon="isCollapsed ? 'angle-right' : 'angle-left'" />
      </button>
    </div>

    <!-- Middle Section with Recent Chats -->
    <div v-if="!isCollapsed" class="px-10 flex-grow">
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

    <!-- Bottom Section with Profile and Settings Icons -->
    <div class="flex flex-col items-center space-y-4">
      <button aria-label="Profile" class="profile-icon text-white">
        <font-awesome-icon icon="user" size="lg" />
      </button>
      <button aria-label="Settings" class="settings-icon text-white">
        <font-awesome-icon icon="cog" size="lg" />
      </button>
    </div>
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
      isCollapsed: false, // state to track if the sidebar is collapsed or not
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
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
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
      // Implement rename functionality
      console.log("Renaming chat with index:", chatIndex);
    },
    deleteChat(chatIndex) {
      // Implement delete functionality
      console.log("Deleting chat with index:", chatIndex);
    },
  },
};
</script>

<style scoped>
.sidebar {
  transition: width 0.3s ease, padding 0.3s ease, transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.title {
  color: #4f5074;
}
.collapse-toggle,
.profile-icon,
.settings-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
}
</style>
