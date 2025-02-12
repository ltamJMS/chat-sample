<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-1/7 border-r flex flex-col">
    <div class="p-3 flex items-center gap-2 border-b">
      <button class="w-full justify-start border rounded px-2 py-1 text-sm flex items-center">
        ChatGPT
        <svg class="ml-auto h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>

    <div class="flex-1 overflow-y-auto p-2 space-y-2">
      <button class="w-full justify-start text-sm px-2 py-1 hover:bg-gray-100 flex">ChatGPT</button>
      <button class="w-full justify-start text-sm px-2 py-1 hover:bg-gray-100 flex">GPT を探す</button>

      <div class="pt-4 pb-2 px-2 text-sm text-gray-500">今日</div>

      <button class="w-full justify-start text-sm px-2 py-1 bg-gray-200 rounded flex">AI Tools for HTML UI</button>

      <div class="space-y-2">
        <button class="w-full justify-start text-sm px-2 py-1 hover:bg-gray-100 flex truncate" v-for="i in 10" :key="i">
          Chat History Item {{ i }}
        </button>
      </div>
    </div>

    <div class="p-3 border-t">
      <button class="w-full justify-start px-2 py-1 text-sm flex">Thêm đồng nghiệp</button>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
