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

      <!-- ChatGPT -->
      <button class="w-full justify-start px-2 text-sm flex items-center space-x-3">
        <div class="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden"> <img
            src="/images/chatgpt.png" alt="ChatGPT" class="w-full h-full object-cover">
        </div>
        <span>ChatGPT</span>
      </button>

      <!-- SORA -->
      <button class="w-full justify-start px-2 text-sm flex items-center space-x-3">
        <div class="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 overflow-hidden">
          <img src="/images/sora.png" alt="SORA" class="w-full h-full object-cover">
        </div>
        <span>SORA</span>
      </button>

      <!-- Kham pha GPT -->
      <button class="w-full justify-start px-2 text-sm flex items-center space-x-3">
        <div class="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200">
          <font-awesome-icon :icon="['fas', 'registered']" class="text-gray-400 w-4 h-4" />
        </div>
        <span>Khám phá GPT</span>
      </button>

      <div class="pt-4 pb-2 px-2 text-xs font-medium">Dự án</div>
      <button class="w-full justify-start text-sm px-2 py-1 rounded flex items-center space-x-2 hover:bg-gray-100">
        <font-awesome-icon :icon="['fas', 'folder-open']" class="text-gray-600 w-4 h-4" />
        <span>Dự án mới</span>
      </button>

      <div class="pt-4 pb-2 px-2 text-xs font-medium">Hôm nay</div>
      <button class="w-full justify-start text-sm px-2 py-1 rounded flex">
        AI Tools for HTML UI
      </button>

      <div class="space-y-2">
        <div v-for="(item, index) in 10" :key="'today-' + index" class="relative">
          <button class="w-full justify-between text-sm px-2 py-1 flex items-center truncate"
            :class="{ 'bg-gray-300': selectedIndex === index, 'hover:bg-gray-100': selectedIndex !== index }"
            @click="selectItem(index)">
            <!-- Nội dung chat -->
            <span class="truncate">Chat History Item {{ index + 1 }}</span>
            <div  @click.stop="toggleDropdown(index)" class="w-6 h-6 flex items-center justify-center">
                <font-awesome-icon :icon="['fas', 'ellipsis']" class="text-gray-400 w-4 h-4" />
              </div>
          </button>

          <!-- Dropdown -->
          <div v-if="openDropdown === index" class="absolute right-0 mt-1 w-32 bg-white border rounded shadow-lg z-10"
            @click.stop>
            <button class="block w-full text-left px-3 py-1 hover:bg-gray-100 text-sm" @click="shareItem(index)">Chia
              sẻ</button>
            <button class="block w-full text-left px-3 py-1 hover:bg-gray-100 text-sm" @click="renameItem(index)">Đổi
              tên</button>
            <button class="block w-full text-left px-3 py-1 hover:bg-gray-100 text-sm" @click="archiveItem(index)">Lưu
              trữ</button>
            <button class="block w-full text-left px-3 py-1 hover:bg-red-100 text-sm text-red-500"
              @click="deleteItem(index)">Xóa</button>
          </div>
        </div>
      </div>

      <!-- Section mới: 7 ngày trước đó -->
      <div class="pt-4 pb-2 px-2 text-xs font-medium">7 ngày trước đó</div>

      <button class="w-full justify-start text-sm px-2 py-1 rounded flex">
        Past AI Conversations
      </button>

      <div class="space-y-2">
        <button class="w-full justify-start text-sm px-2 py-1 flex truncate"
          :class="{ 'bg-gray-300': selectedIndex === index + 10, 'hover:bg-gray-100': selectedIndex !== index + 10 }"
          v-for="(item, index) in 10" :key="'week-' + index" @click="selectItem(index + 10)">
          Chat History Item {{ index + 11 }}
        </button>
      </div>
    </div>
    <div class="p-3 border-t">
      <button class="w-full justify-start px-2 py-1 text-sm flex items-center space-x-3">
        <!-- Avatar với icon -->
        <div class="w-10 h-8 flex items-center justify-center rounded-full bg-gray-200">
          <font-awesome-icon :icon="['fas', 'envelope-open']" class="text-gray-600 w-4 h-4" />
        </div>
        <!-- Text -->
        <div class="text-left">
          <p class="text-sm">Thêm đồng nghiệp</p>
          <p class="text-xs text-gray-400 mt-1">Mời thành viên vào không gian làm việc ABC</p>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openDropdown: null, // Lưu trạng thái dropdown nào đang mở
      selectedIndex: null, // Lưu trạng thái index được chọn
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
    selectItem(index) {
      this.selectedIndex = index;
      console.log("Selected item:", index);
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
