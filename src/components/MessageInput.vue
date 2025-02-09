<template>
  <div class="w-full p-4 bg-gray-100 flex">
    <input
      v-model="newMessage"
      @keyup.enter="sendMessage"
      type="text"
      class="flex-1 p-2 border rounded"
      placeholder="Type your message and Enter to send it"
    />
    <button @click="sendMessage" class="p-2 ml-2 text-gray-500 hover:text-gray-700">
      <font-awesome-icon :icon="['fas', 'redo']" />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newMessage: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== "") {
        this.$emit("send-message", this.newMessage);
        this.newMessage = "";
      }
    },
  },
};
</script>
