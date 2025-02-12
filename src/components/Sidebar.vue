<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="w-1/6 border-r flex flex-col bg-gray-50">
    <div class="p-3 flex items-center gap-2 border-b">
      <button class="w-full justify-start border rounded px-2 py-1 text-sm flex items-center">
        ChatGPT
        <svg class="ml-auto h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>

    <div class="flex-1 overflow-y-auto p-2 space-y-2">
      <button class="w-full justify-start text-sm px-2 py-1 hover:bg-gray-100 flex">ChatGPT</button>
      <button class="w-full justify-start text-sm px-2 py-1 hover:bg-gray-100 flex">GPT を探す</button>

      <div class="pt-4 pb-2 px-2 text-sm font-medium">Hôm nay</div>

      <button class="w-full justify-start text-sm px-2 py-1 bg-gray-200 rounded flex">
        AI Tools for HTML UI
      </button>

      <div class="space-y-2">
        <div v-for="(item, index) in 10" :key="'today-' + index" class="relative">
          <button
            class="w-full justify-between text-sm px-2 py-1 hover:bg-gray-100 flex items-center truncate"
          >
            <!-- Nội dung chat -->
            <span class="truncate">Chat History Item {{ index + 1 }}</span>

            <!-- Icon More -->
            <button @click.stop="toggleDropdown(index)" class="p-1 rounded-full hover:bg-gray-200">
              <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
                <circle cx="5" cy="12" r="2"></circle>
              </svg>
            </button>
          </button>

          <!-- Dropdown -->
          <div
            v-if="openDropdown === index"
            class="absolute right-0 mt-1 w-32 bg-white border rounded shadow-lg z-10"
            @click.stop
          >
            <button class="block w-full text-left px-3 py-1 hover:bg-gray-100 text-sm" @click="shareItem(index)">Chia sẻ</button>
            <button class="block w-full text-left px-3 py-1 hover:bg-gray-100 text-sm" @click="renameItem(index)">Đổi tên</button>
            <button class="block w-full text-left px-3 py-1 hover:bg-gray-100 text-sm" @click="archiveItem(index)">Lưu trữ</button>
            <button class="block w-full text-left px-3 py-1 hover:bg-red-100 text-sm text-red-500" @click="deleteItem(index)">Xóa</button>
          </div>
        </div>
      </div>

      <!-- Section mới: 7 ngày trước đó -->
      <div class="pt-4 pb-2 px-2 text-sm font-medium">7 ngày trước đó</div>

      <button class="w-full justify-start text-sm px-2 py-1 bg-gray-200 rounded flex">
        Past AI Conversations
      </button>

      <div class="space-y-2">
        <button class="w-full justify-start text-sm px-2 py-1 hover:bg-gray-100 flex truncate" v-for="(item, index) in 10"
          :key="'week-' + index">
          Chat History Item {{ index + 11 }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openDropdown: null, // Lưu trạng thái dropdown nào đang mở
    };
  },
  methods: {
    toggleDropdown(index) {
      console.log("Click More button at index:", index);
      this.openDropdown = this.openDropdown === index ? null : index;
    },
    closeDropdown() {
      this.openDropdown = null;
    },
    shareItem(index) {
      alert(`Chia sẻ mục ${index + 1}`);
      this.closeDropdown();
    },
    renameItem(index) {
      alert(`Đổi tên mục ${index + 1}`);
      this.closeDropdown();
    },
    archiveItem(index) {
      alert(`Lưu trữ mục ${index + 1}`);
      this.closeDropdown();
    },
    deleteItem(index) {
      alert(`Xóa mục ${index + 1}`);
      this.closeDropdown();
    },
  },
  mounted() {
    // Lắng nghe sự kiện click ra ngoài để đóng dropdown
    document.addEventListener("click", this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
  },
};
</script>

<style scoped>
/* Optional: Add custom styles if needed */
</style>
