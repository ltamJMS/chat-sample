<template>
  <div class="flex-1 h-full overflow-y-auto bg-white p-4 mt-4">
    <div v-for="(message, index) in messages" :key="index">
      <div :class="index % 2 === 0 ? 'text-left' : 'text-right'">
        <div class="inline-block bg-gray-200 p-2 m-1 rounded">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        "Hello",
        "Hello",
        "Hello",
      ],
    };
  },
};
</script>