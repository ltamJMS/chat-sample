<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    :class="['sidebar', { 'w-1/4': !isCollapsed, 'w-16': isCollapsed }]"
    class="h-full bg-gray-800 text-white flex flex-col justify-between p-4"
  >
    <!-- Section 1: Collapse btn -->
    <div class="flex items-center justify-start w-full">
      <button @click="toggleSidebar" class="collapse-toggle text-white">
        <font-awesome-icon :icon="isCollapsed ? 'angle-right' : 'angle-left'" />
      </button>
    </div>

    <!-- Section 2: Recent Conversations -->
    <div v-if="!isCollapsed" class="px-10 flex-grow">
      <h2 class="title text-xl font-bold mb-4">Recent Conversations</h2>
      <ChatSection
        v-for="(chatList, period) in chatPeriods"
        :key="period"
        :title="period"
        :chats="chatList"
        @renameChat="renameChat"
        @deleteChat="deleteChat"
      />
    </div>

    <!-- Section 3: Profile + Settings -->
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
      isCollapsed: false,
      chats: [
        { name: "Sidebar menu for quick-access", timestamp: new Date() - 10000 },
        { name: "Unix timestamps as needed use", timestamp: new Date() - 86400000 },
        { name: "More chat objects with Clerks", timestamp: new Date() - 172800000 },
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
      console.log("1111", chatIndex);
    },
    deleteChat(chatIndex) {
      console.log("1111", chatIndex);
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
