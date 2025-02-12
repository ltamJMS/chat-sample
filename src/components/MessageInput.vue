<template>
  <div class="relative">
    <input type="text" placeholder="ChatGPT にメッセージを送信する" class="w-full border rounded px-3 py-2 pr-20 text-sm" />
    <div class="absolute right-2 top-2 flex items-center gap-2">
      <button class="h-6 w-6 text-gray-500 hover:text-black">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <button class="h-6 w-6 text-gray-500 hover:text-black">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12c4.418 0 8-3.582 8-8H4c0 4.418 3.582 8 8 8z" />
        </svg>
      </button>
      <button class="h-6 w-6 text-gray-500 hover:text-black">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 12l4.243-4.243M6.343 6.343L10.586 12l-4.243 4.243" />
        </svg>
      </button>
    </div>
        <!-- Thêm thông báo vào cuối phần ChatDisplay -->
        <div class="text-center text-sm text-gray-500 mt-6">
      ChatGPT の回答はあくまで正しいとは限りません。重要な情報は確認するようにしてください。
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageInput'
};
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
