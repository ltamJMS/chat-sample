<template>
  <div class="w-full p-4 bg-gray-100 flex">
    <input
      v-model="newMessage"
      @keyup.enter="sendMessage"
      type="text"
      class="flex-1 p-2 border rounded"
      placeholder="Type your message here..."
    />
    <button
      @click="sendMessage"
      class="ml-4 p-2 bg-blue-500 text-white rounded"
    >
      Send
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
